import React, { useState } from 'react';
import './NewToDoItem.css';
import '../../checkboxStyles.css';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

function NewToDoItem({ addNewToDo }) {
    const [isChecked, setIsChecked] = useState(false);
    const [task, setTask] = useState("")

    return (
        <div className={`toDoRow new`}>
            <div className="toDoCheckbox">
                <input type="checkbox" id="id-new" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                <label htmlFor={`id-new`}></label>
            </div>
            <input className="toDoTask" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <div className="toDoBtns">
                <button className="addNewToDoBtn" onClick={() => addNewToDo(task, isChecked)}>
                    <AddIcon></AddIcon>
                </button>
            </div>
        </div>
    );
}

export default NewToDoItem;