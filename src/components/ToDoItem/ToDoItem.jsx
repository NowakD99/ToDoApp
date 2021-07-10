import React, { useState } from 'react';
import './ToDoItem.css';
import '../../checkboxStyles.css';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import { ReactComponent as RemoveIcon } from '../../icons/add.svg';

function ToDoItem({ item, deleteToDo, updateToDo }) {
    const [isChecked, setIsChecked] = useState(item.is_completed === 0 ? false : true);
    const [task, setTask] = useState(item.task)

    return (
        <div className={`toDoRow ${isChecked ? 'completed' : 'notCompleted'}`} id={item.id}>
            <div className="toDoCheckbox">
                <input type="checkbox" id={`id-${item.id}`} checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                <label htmlFor={`id-${item.id}`}></label>
            </div>
            <input className="toDoTask" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <div className="toDoBtns">
                <button className="updateToDoBtn" onClick={() => updateToDo(item.id, task, isChecked)}>
                    <CheckIcon></CheckIcon>
                </button>
                <button className="deleteToDoBtn" onClick={() => deleteToDo(item.id)}>
                    <RemoveIcon></RemoveIcon>
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;