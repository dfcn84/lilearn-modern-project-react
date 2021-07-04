import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [todoInput, setTodoInput] = useState("");

    return (
        <div className="new-todo-form">
            <input type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} className="new-todo-input" />
            <button onClick={() => {
                const isDuplicateText = todos.some(todo => todo.text === todoInput);
                if (!isDuplicateText) {
                    onCreatePressed(todoInput);
                    setTodoInput("");
                }
            }} className="btn-create">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);