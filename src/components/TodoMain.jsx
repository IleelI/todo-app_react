import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { filters } from '../constants';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';

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
        return (
            <main className="app__main">
                <TodoForm
                    todo={todo}
                    onTodoInputChange={this.handleTodoInputChange}
                    onTodoFormSubmit={this.handleTodoFormSubmit}
                />
                <article className="todo__list-wrapper">
                    <h1 className="list__heading">Here are your todos</h1>
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
