import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS } from '../constants';

function formErrors({ errors }) {
    return errors.length === 0 ? null : (
        <ul>
            {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}
        </ul>
    );
}

function priorityOptions(options) {
    return options.map(([key, val]) => <option key={key}>{val}</option>);
}

function TodoListForm({ formState, onTodoInputChange, onTodoFormSubmit }) {
    const { PRIORITY } = FILTERS;
    const { todo } = formState;
    const options = Object.entries(PRIORITY);
    return (
        <form onSubmit={onTodoFormSubmit}>
            {formErrors(formState)}
            <label htmlFor="todoName">
                <h3>Todo name:</h3>
                <input type="text" name="name" value={todo.name} onChange={onTodoInputChange} />
            </label>
            <label htmlFor="todoDeadline">
                <h3>Todo deadline:</h3>
                <input
                    type="text"
                    name="deadline"
                    value={todo.deadline}
                    onChange={onTodoInputChange}
                />
            </label>
            <label htmlFor="todoPriority">
                <h3>Todo Priority</h3>
                <select value={todo.priority} name="priority" onChange={onTodoInputChange}>
                    {priorityOptions(options)}
                </select>
            </label>
            <button type="submit">Add Todo</button>
        </form>
    );
}

TodoListForm.propTypes = {
    formState: PropTypes.shape({
        todo: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            deadline: PropTypes.string,
            priority: PropTypes.string
        }),
        errors: PropTypes.arrayOf(PropTypes.string)
    }),
    onTodoInputChange: PropTypes.func,
    onTodoFormSubmit: PropTypes.func
};
TodoListForm.defaultProps = {
    formState: null,
    onTodoInputChange: null,
    onTodoFormSubmit: null
};

export default TodoListForm;
