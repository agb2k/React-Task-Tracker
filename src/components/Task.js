import React from 'react'
import { FaTimes, FaToggleOn, FaToggleOff } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className="task">
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>
                {task.day}
                {task.reminder === true ?
                    <FaToggleOn
                        style={{ color: 'black', cursor: 'pointer' }}
                        onClick={() => onToggle(task.id)}
                    /> :
                    <FaToggleOff
                        style={{ color: 'black', cursor: 'pointer' }}
                        onClick={() => onToggle(task.id)}
                    />
                }

            </p>
        </div>
    )
}

export default Task
