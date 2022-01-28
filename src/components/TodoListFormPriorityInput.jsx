import React from 'react';

function TodoListFormPriorityInput() {
    return (
        <label htmlFor="todoPriority">
            <h3>Todo Priority</h3>
            <select>
                <option>(PLACEHOLDER) IMPORTANT</option>
                <option>(PLACEHOLDER) NORMAL</option>
                <option>(PLACEHOLDER) NOT IMPORTANT</option>
            </select>
        </label>
    );
}

export default TodoListFormPriorityInput;
