import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import { getPrioritySortedList, getTimeSortedList, getFilteredList } from '../utils/utils';
import { SORTING } from '../constants';

function TodoList({ todos, listOptions, onTodoFinishClick, onTodoRemoveClick }) {
    const {
        selectedSorting: [selectedSort],
        selectedFilters
    } = listOptions;
    const outputTodos =
        selectedFilters.length !== 0 ? getFilteredList(todos, selectedFilters) : [...todos];
    if (selectedSort === SORTING.NEWEST || selectedSort === SORTING.OLDEST) {
        getTimeSortedList(outputTodos, selectedSort);
    } else {
        getPrioritySortedList(outputTodos, selectedSort);
    }

    return (
        <div>
            {outputTodos.length !== 0 ? (
                <ol className="todo-list">
                    {outputTodos.map((todo) => {
                        return (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                onTodoFinishClick={onTodoFinishClick}
                                onTodoRemoveClick={onTodoRemoveClick}
                            />
                        );
                    })}
                </ol>
            ) : (
                <h1>No todos found :(</h1>
            )}
        </div>
    );
}

TodoList.propTypes = {
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
    listOptions: PropTypes.shape({
        selectedFilters: PropTypes.arrayOf(PropTypes.string),
        selectedSorting: PropTypes.arrayOf(PropTypes.string)
    }),
    onTodoFinishClick: PropTypes.func,
    onTodoRemoveClick: PropTypes.func
};
TodoList.defaultProps = {
    todos: [],
    listOptions: null,
    onTodoFinishClick: null,
    onTodoRemoveClick: null
};

export default TodoList;
