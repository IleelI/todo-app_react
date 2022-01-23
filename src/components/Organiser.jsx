import React, { Component } from 'react';
import OrganiserInput from './OrganiserInput';
import OrganiserFilters from './OrganiserFilters';
import OrganiserList from './OrganiserList';

const filters = ['all', 'finished', 'unfinished'];

class Organiser extends Component {
    constructor(props) {
        super(props);
        // Our single source of truth for OrganiserInput component, OrganiserList and OrganiserFilters
        this.state = {
            todo: '',
            todos: [],
            filter: filters[0]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange = ({ target }) => {
        const updatedTodo = target.value;
        this.setState({
            todo: updatedTodo
        });
    };

    /* todo add uuid id generation for todo items */
    handleFormSubmit(e) {
        e.preventDefault();
        const { todo, todos } = this.state;
        if (todo.length === 0) return;
        const newTodos = todos.concat(todo);
        const newTodo = '';
        this.setState({ todo: newTodo, todos: newTodos });
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
