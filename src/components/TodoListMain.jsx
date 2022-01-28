import React, { Component } from 'react';
import ComponentToggler from './ComponentToggler';
import TodoListOptions from './TodoListOptions';
import TodoList from './TodoList';

// eslint-disable-next-line react/prefer-stateless-function
class TodoListMain extends Component {
    render() {
        return (
            <main className="todo-list-wrapper">
                <ComponentToggler />
                <TodoListOptions />
                <TodoList />
            </main>
        );
    }
}

export default TodoListMain;
