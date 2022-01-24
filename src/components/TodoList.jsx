import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { filters } from '../constants';

function TodoList({ todos, currentFilter, onFinishTodoClick, onRemoveTodoClick }) {
    const filteredTodos = todos.map(({ value, id, isFinished }) => {
        if (isFinished && currentFilter !== filters.UNFINISHED)
            return (
                <TodoItem
                    key={id}
                    id={id}
                    value={value}
                    onFinishTodoClick={onFinishTodoClick}
                    onRemoveTodoClick={onRemoveTodoClick}
                />
            );
        if (!isFinished && currentFilter !== filters.FINISHED)
            return (
                <TodoItem
                    key={id}
                    id={id}
                    value={value}
                    onFinishTodoClick={onFinishTodoClick}
                    onRemoveTodoClick={onRemoveTodoClick}
                />
            );
        return null;
    });
    return <ul>{filteredTodos}</ul>;
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string,
            isFinished: PropTypes.bool
        })
    ),
    currentFilter: PropTypes.string,
    onFinishTodoClick: PropTypes.func,
    onRemoveTodoClick: PropTypes.func
};
TodoList.defaultProps = {
    todos: [],
    currentFilter: '',
    onFinishTodoClick: null,
    onRemoveTodoClick: null
};

export default TodoList;
