import React from 'react';
import './TodoListItem.css';


const TodoListItem = ({ todo, onMarkAsCompletedPressed, onRemovePressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            { todo.isCompleted
                ? null
                : <button onClick={() => {
                    onMarkAsCompletedPressed(todo.text)
                }} className="btn btn-complete">Mark as Complete</button>
            }
            <button onClick={() => {
                onRemovePressed(todo.text)
            }} className="btn btn-remove">Remove</button>
        </div>
    </div>
);

export default TodoListItem;