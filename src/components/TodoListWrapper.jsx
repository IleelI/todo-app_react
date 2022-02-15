import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentToggler from './ComponentToggler';
import TodoListOptions from './TodoListOptions';
import TodoList from './TodoList';
import { SORTING } from '../utils/constants';

class TodoListWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTodoListToggled: true,
            listOptions: {
                selectedFilters: [],
                selectedSorting: [SORTING.NEWEST]
            }
        };
        this.handleNewSortingToggleClick = this.handleNewSortingToggleClick.bind(this);
        this.handleToggleTodoListClick = this.handleToggleTodoListClick.bind(this);
        this.handleNewFilterToggleClick = this.handleNewFilterToggleClick.bind(this);
    }

    handleToggleTodoListClick() {
        this.setState(({ isTodoListToggled }) => ({
            isTodoListToggled: !isTodoListToggled
        }));
    }

    handleNewFilterToggleClick(newFilter) {
        const {
            listOptions: { selectedFilters }
        } = this.state;
        if (selectedFilters.indexOf(newFilter) === -1) {
            this.setState(({ listOptions }) => ({
                listOptions: {
                    ...listOptions,
                    selectedFilters: [...selectedFilters, newFilter]
                }
            }));
            return;
        }
        this.setState(({ listOptions }) => ({
            listOptions: {
                ...listOptions,
                selectedFilters: selectedFilters.filter((filter) => filter !== newFilter)
            }
        }));
    }

    handleNewSortingToggleClick(newSorting) {
        this.setState(({ listOptions }) => ({
            listOptions: {
                ...listOptions,
                selectedSorting: [newSorting]
            }
        }));
    }

    render() {
        const { isTodoListToggled, listOptions } = this.state;
        const { todos, onTodoRemoveClick, onTodoFinishClick, onTodoEditToggleClick } = this.props;
        return (
            <article className="mb-8 bg-zinc-50 rounded-lg dark:bg-gray-700">
                <ComponentToggler
                    isComponentToggled={isTodoListToggled}
                    componentTitle="Your todos"
                    onButtonClick={this.handleToggleTodoListClick}
                />
                {isTodoListToggled ? (
                    <div className="px-8 pt-4 pb-8 text-gray-700 dark:text-zinc-50">
                        <TodoListOptions
                            listOptions={listOptions}
                            onNewFilterToggleClick={this.handleNewFilterToggleClick}
                            onNewSortingToggleClick={this.handleNewSortingToggleClick}
                        />
                        <TodoList
                            todos={todos}
                            listOptions={listOptions}
                            onTodoRemoveClick={onTodoRemoveClick}
                            onTodoFinishClick={onTodoFinishClick}
                            onTodoEditToggleClick={onTodoEditToggleClick}
                        />
                    </div>
                ) : null}
            </article>
        );
    }
}

TodoListWrapper.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            date: PropTypes.string,
            name: PropTypes.string,
            deadline: PropTypes.string,
            priority: PropTypes.string,
            isFinished: PropTypes.bool
        })
    ),
    onTodoFinishClick: PropTypes.func,
    onTodoRemoveClick: PropTypes.func,
    onTodoEditToggleClick: PropTypes.func
};
TodoListWrapper.defaultProps = {
    todos: [],
    onTodoFinishClick: null,
    onTodoRemoveClick: null,
    onTodoEditToggleClick: null
};

export default TodoListWrapper;
