import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import OrganiserInput from './OrganiserInput';
import OrganiserFilters from './OrganiserFilters';
import OrganiserList from './OrganiserList';

const filters = ['all', 'finished', 'unfinished'];

class Organiser extends Component {
    constructor(props) {
        super(props);
        // Our single source of truth for OrganiserInput component, OrganiserList and OrganiserFilters
        this.state = {
            todo: {
                value: '',
                id: uuid()
            },
            todos: [],
            filter: filters[0]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange = ({ target }) => {
        const { todo } = this.state;
        const updatedTodo = { ...todo, value: target.value };
        this.setState({
            todo: updatedTodo
        });
    };

    handleFormSubmit(e) {
        e.preventDefault();
        const { todo, todos } = this.state;
        if (todo.value.length === 0) return;
        // Adding new to-do with uuid into array of todos.
        const newTodos = todos.concat(todo);
        // Updating state with new array and cleared input field
        this.setState({ todo: { value: '', id: uuid() }, todos: newTodos });
    }

    handleButtonClick({ target: { innerText: newFilter } }) {
        const { filter } = this.state;
        if (filter === newFilter) return;
        this.setState({
            filter: newFilter.toLowerCase()
        });
    }

    render() {
        const { todo, todos, filter } = this.state;
        return (
            <main className="app__main">
                <OrganiserInput
                    todo={todo}
                    onInputChange={this.handleInputChange}
                    onFormSubmit={this.handleFormSubmit}
                />
                <article className="todo__list-wrapper">
                    <h1 className="list__heading">Here are your todos</h1>
                    <OrganiserFilters
                        filters={filters}
                        currentFilter={filter}
                        onButtonClick={this.handleButtonClick}
                    />
                    <OrganiserList todos={todos} />
                </article>
            </main>
        );
    }
}

export default Organiser;
