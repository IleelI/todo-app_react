import React, { Component } from 'react';
import TodoListWrapper from '../TodoListWrapper';
import TodoListFormWrapper from '../TodoListFormWrapper';
import { SORTING } from '../../constants';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listState: {
                todos: [],
                selectedFilters: [],
                selectedSorting: SORTING.NEWEST
            }
        };
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(todo) {
        this.setState(({ listState }) => ({
            listState: {
                ...listState,
                todos: [...listState.todos, todo]
            }
        }));
    }

    render() {
        const { listState } = this.state;
        return (
            <div>
                <TodoListFormWrapper addNewTodo={this.addNewTodo} />
                <TodoListWrapper listState={listState} />
            </div>
        );
    }
}

export default Main;
