import React, { useEffect, useReducer } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import NewToDoItem from '../NewToDoItem/NewToDoItem.jsx';
import './ToDoList.css';
import { API, initialState } from '../../variables';
import { getFormData } from '../../helpers';

import { ReactComponent as AddIcon } from '../../icons/add.svg';
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';


// const initialState = { toDoList: [], newTaskIsActive: false, filterDoneTask: false }

function reducer(state, action) {
    switch (action.type) {
        case 'getToDoList':
            return { toDoList: action.payload };
        case 'setNewTaskIsActive':
            return { ...state, newTaskIsActive: action.payload }
        case 'setFilterDoneTask':
            return { ...state, filterDoneTask: action.payload, }
        default:
            throw new Error();
    }
}

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function getToDoList() {
        fetch(API)
            .then(response => response.json())
            .then(toDoList => dispatch({ type: 'getToDoList', payload: toDoList.data }));
    }

    function deleteToDoFromList(id) {
        fetch(`${API}/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(() => getToDoList());
    }

    function addToDoToList(task, isCompleted) {

        const formData = getFormData(task, isCompleted)

        fetch(API, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(toDoList => dispatch({ type: 'getToDoList', payload: toDoList.data }))
            .then(() => { getToDoList(); dispatch({ type: 'setNewTaskIsActive', payload: false }) })
    }

    function updateToDoInList(id, task, isCompleted) {

        const formData = getFormData(task, isCompleted)

        fetch(`${API}/${id}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(toDoList => dispatch({ type: 'getToDoList', payload: toDoList.data }))
            .then(() => { getToDoList(); dispatch({ type: 'setNewTaskIsActive', payload: false }) })
    }

    useEffect(() => {
        getToDoList()
    }, []);

    return (
        <div className="toDoContainer">
            <div className="toDoHeader">
                <button onClick={() => dispatch({ type: 'setNewTaskIsActive', payload: !state.newTaskIsActive })}>
                    <AddIcon></AddIcon>
                </button>
                <span >To-Do List</span>
                <button onClick={() => dispatch({ type: 'setFilterDoneTask', payload: !state.filterDoneTask })}>
                    <SettingsIcon></SettingsIcon>
                </button>
            </div>
            <div className="toDoBody">
                {state.newTaskIsActive ?
                    <NewToDoItem addNewToDo={addToDoToList}></NewToDoItem>
                    : null}
                {state.toDoList.length ?
                    state.toDoList.filter((item) => !state.filterDoneTask || item.is_completed === 1)
                        .map((item) => {
                            return <ToDoItem
                                item={item}
                                key={item.id}
                                deleteToDo={deleteToDoFromList}
                                updateToDo={updateToDoInList}>
                            </ToDoItem>
                        })
                    : null}
            </div>
        </div>
    );
}

export default ToDoList;
