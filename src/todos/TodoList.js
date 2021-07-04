import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';
import './TodoList.css';


const TodoList = ({ todos = [], onMarkAsCompletedPressed, onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map((todo, key) => <TodoListItem key={key} todo={todo} onMarkAsCompletedPressed={onMarkAsCompletedPressed} onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkAsCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);