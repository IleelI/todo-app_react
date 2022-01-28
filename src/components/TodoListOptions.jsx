import React from 'react';
import PropTypes from 'prop-types';
import TodoListFilters from './TodoListFilters';
import TodoListSorting from './TodoListSorting';

function TodoListOptions() {
    return (
        <nav className="list-options">
            {/* TODO:
                  Add filter and sort functionality
                  Merge ListFilters and ListSorting into one
                    single component that accepts onClick event handlers.
            */}
            <TodoListFilters />
            <TodoListSorting />
        </nav>
    );
}

TodoListOptions.propTypes = {
    listState: PropTypes.shape({
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                deadline: PropTypes.string,
                priority: PropTypes.string
            })
        ),
        selectedFilters: PropTypes.arrayOf(PropTypes.string),
        selectedSorting: PropTypes.string
    })
};
TodoListOptions.defaultProps = {
    listState: null
};

export default TodoListOptions;
