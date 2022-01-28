import React from 'react';
import TodoListFilters from './TodoListFilters';
import TodoListSorting from './TodoListSorting';

function TodoListOptions() {
    return (
        <nav className="list-options">
            <TodoListFilters />
            <TodoListSorting />
        </nav>
    );
}

export default TodoListOptions;
