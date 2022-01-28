import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
    return (
        <ol className="todo-list">
            <TodoListItem />
        </ol>
    );
}

export default TodoList;
