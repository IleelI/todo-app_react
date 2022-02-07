import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS } from '../utils/constants';
import { priorityOptions, getFormErrors } from '../utils/utils';

function TodoListForm({ formState, onTodoInputChange, onTodoFormSubmit }) {
    const { PRIORITY } = FILTERS;
    const { todo, errors } = formState;
    const options = Object.entries(PRIORITY);
    return (
        <form className="px-8 pt-4 pb-8 dark:text-zinc-50" onSubmit={onTodoFormSubmit}>
            {getFormErrors(errors)}
            <label htmlFor="todoName">
                <h3 className="text-xl font-normal mb-2">Todo name:</h3>
                <input
                    className="w-full mb-4 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                    dark:bg-gray-600 dark:shadow-gray-800"
                    type="text"
                    name="name"
                    value={todo.name}
                    onChange={onTodoInputChange}
                />
            </label>
            <label htmlFor="todoDeadline">
                <h3 className="text-xl font-normal mb-2">Todo deadline:</h3>
                <input
                    className="w-full mb-4 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                    dark:bg-gray-600 dark:shadow-gray-800"
                    type="text"
                    name="deadline"
                    value={todo.deadline}
                    onChange={onTodoInputChange}
                />
            </label>
            <label htmlFor="todoPriority">
                <h3 className="text-xl font-normal mb-2">Todo Priority</h3>
                <select
                    className="w-full mb-8 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                    dark:bg-gray-600 dark:shadow-gray-800"
                    value={todo.priority}
                    name="priority"
                    onChange={onTodoInputChange}>
                    {priorityOptions(options)}
                </select>
            </label>
            <button
                className="w-full px-4 py-0.5 bg-gray-700 text-zinc-50 text-2xl font-semibold rounded rounded-xl
                dark:bg-zinc-50 dark:text-gray-700"
                type="submit">
                Add Todo
            </button>
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
