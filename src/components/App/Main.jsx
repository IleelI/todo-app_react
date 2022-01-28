import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import TodoListWrapper from '../TodoListWrapper';
import TodoListFormWrapper from '../TodoListFormWrapper';
import { FILTERS, SORTING } from '../../constants';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: {
                todo: {
                    id: uuid(),
                    name: '',
                    deadline: '',
                    priority: FILTERS.PRIORITY.NORMAL
                },
                errors: []
            },
            listState: {
                todos: [],
                selectedFilters: [],
                selectedSorting: SORTING.NEWEST
            }
        };
        this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
        this.handleTodoFormSubmit = this.handleTodoFormSubmit.bind(this);
    }

    handleTodoInputChange({ target }) {
        const { formState } = this.state;
        const { name, value } = target;
        this.setState({
            formState: {
                ...formState,
                todo: {
                    ...formState.todo,
                    [name]: value
                }
            }
        });
    }

    /*
        TODO
            Fix re-rendering of whole up while entering input
    */
    handleTodoFormSubmit(e) {
        e.preventDefault();
        const { formState, listState } = this.state;
        const errors = Object.entries(formState.todo)
            .map(([key, value]) => {
                if (value.length === 0) return `Todo ${key}, must be a non-empty field`;
                return null;
            })
            .filter((error) => error !== null);
        if (errors.length !== 0) {
            this.setState({
                formState: {
                    ...formState,
                    errors
                }
            });
            return;
        }
        const { todo } = formState;
        this.setState({
            formState: {
                todo: {
                    id: uuid(),
                    name: '',
                    deadline: '',
                    priority: FILTERS.PRIORITY.NORMAL
                },
                errors: []
            },
            listState: {
                ...listState,
                todos: [...listState.todos, todo]
            }
        });
    }

    render() {
        const { formState, listState } = this.state;
        return (
            <div>
                <TodoListFormWrapper
                    formState={formState}
                    onTodoInputChange={this.handleTodoInputChange}
                    onTodoFormSubmit={this.handleTodoFormSubmit}
                />
                <TodoListWrapper listState={listState} />
            </div>
        );
    }
}

export default Main;
