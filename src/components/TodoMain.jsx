import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { filters } from '../constants';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';

/*
TODO:
    · Style application with dark mode primary in mind.
    · Add json server as mock database.
    · Switch from using local used data to server used one.
    · Introduce login/register functionality into app.
*/
class TodoMain extends Component {
    constructor(props) {
        super(props);
        // Our single source of truth for OrganiserInput component, OrganiserList and OrganiserFilters
        this.state = {
            todo: {
                value: '',
                id: uuid(),
                isFinished: false
            },
            todos: [],
            currentFilter: filters.ALL
        };
        this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
        this.handleTodoFormSubmit = this.handleTodoFormSubmit.bind(this);
        this.handleFilterButtonClick = this.handleFilterButtonClick.bind(this);
        this.handleRemoveTodoClick = this.handleRemoveTodoClick.bind(this);
        this.handleFinishTodoClick = this.handleFinishTodoClick.bind(this);
    }

    handleTodoInputChange = ({ target }) => {
        const { todo } = this.state;
        const updatedTodo = { ...todo, value: target.value };
        this.setState({
            todo: updatedTodo
        });
    };

    handleTodoFormSubmit(e) {
        e.preventDefault();
        const { todo, todos } = this.state;
        if (todo.value.length === 0) return;
        // Adding new to-do with uuid into array of todos.
        const newTodos = todos.concat(todo);
        // Updating state with new array and cleared input field
        this.setState({ todo: { value: '', id: uuid(), isFinished: false }, todos: newTodos });
    }

    handleFilterButtonClick({ target: { innerText: newFilter } }) {
        const { currentFilter } = this.state;
        // Checking if current filter is already the one being clicked
        // if true then we will simply return
        if (currentFilter === newFilter) return;
        // Else we set new currentFilter value.
        this.setState({
            currentFilter: newFilter.toLowerCase()
        });
    }

    handleRemoveTodoClick(todoID) {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todo) => todo.id !== todoID)
        });
    }

    handleFinishTodoClick(todoID) {
        const { todos } = this.state;
        const foundTodo = todos.find((todo) => todo.id === todoID);
        const newTodo = { ...foundTodo, isFinished: !foundTodo.isFinished };
        const newTodos = todos.map((todo) => {
            if (todo.id === todoID) return newTodo;
            return todo;
        });
        this.setState({
            todos: newTodos
        });
    }

    render() {
        const { todo, todos, currentFilter } = this.state;
        const resultsHeading =
            todos.length !== 0 ? (
                <h1
                    className="mb-4 pb-2 border-b border-emerald-800 text-emerald-600 text-xl font-medium text-center
                    dark:border-emerald-400 dark:text-emerald-500">
                    Here are your todos
                </h1>
            ) : (
                <h1
                    className="mb-4 pb-2 border-b border-emerald-800 text-slate-700 text-xl font-medium text-center
                    dark:border-emerald-400 dark:text-slate-200">
                    Todo list is empty
                </h1>
            );
        return (
            <main className="mb-8 p-8 rounded-2xl bg-slate-50 drop-shadow-lg dark:bg-slate-700">
                <TodoForm
                    todo={todo}
                    onTodoInputChange={this.handleTodoInputChange}
                    onTodoFormSubmit={this.handleTodoFormSubmit}
                />
                <article className="todo__list-wrapper">
                    {resultsHeading}
                    <TodoFilters
                        currentFilter={currentFilter}
                        onFilterButtonClick={this.handleFilterButtonClick}
                    />
                    <TodoList
                        currentFilter={currentFilter}
                        todos={todos}
                        onRemoveTodoClick={this.handleRemoveTodoClick}
                        onFinishTodoClick={this.handleFinishTodoClick}
                    />
                </article>
            </main>
        );
    }
}

export default TodoMain;
