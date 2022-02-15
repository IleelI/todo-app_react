import React from 'react';
import PropTypes from 'prop-types';
import ComponentToggler from './ComponentToggler';
import { FILTERS } from '../utils/constants';
import { priorityOptions, getFormErrors } from '../utils/utils';

function TodoEditModal({
    editState,
    onTodoEditToggleClick,
    onTodoEditSaveClick,
    onTodoEditInputChange
}) {
    const { isEditToggled, editedTodo, errors } = editState;
    const { PRIORITY } = FILTERS;
    const options = Object.entries(PRIORITY);
    return (
        <div>
            <div
                className="fixed w-full px-4 top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2 z-30">
                <article
                    className="bg-zinc-50 rounded rounded-xl border border-gray-700
                dark:bg-gray-700 dark:text-zinc-50 dark:border-zinc-50">
                    <ComponentToggler
                        isComponentToggled={isEditToggled}
                        componentTitle="Edit Todo"
                        onButtonClick={onTodoEditToggleClick}
                    />
                    {getFormErrors(errors)}
                    <form className="my-4 mx-8" onSubmit={onTodoEditSaveClick}>
                        <label htmlFor="todoName">
                            <h3 className="text-xl font-normal mb-2">Todo name:</h3>
                            <input
                                className="w-full mb-4 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                            dark:bg-gray-600 dark:shadow-gray-800"
                                type="text"
                                name="name"
                                value={editedTodo.name}
                                onChange={onTodoEditInputChange}
                            />
                        </label>
                        <label htmlFor="todoDeadline">
                            <h3 className="text-xl font-normal mb-2">Todo deadline:</h3>
                            <input
                                className="w-full mb-4 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                                dark:bg-gray-600 dark:shadow-gray-800"
                                type="date"
                                name="deadline"
                                value={editedTodo.deadline}
                                onChange={onTodoEditInputChange}
                            />
                        </label>
                        <label htmlFor="todoPriority">
                            <h3 className="text-xl font-normal mb-2">Todo Priority</h3>
                            <select
                                className="w-full mb-8 px-2 py-1.5 bg-zinc-100 shadow-inner shadow-gray-300 rounded-md
                                dark:bg-gray-600 dark:shadow-gray-800"
                                value={editedTodo.priority}
                                name="priority"
                                onChange={onTodoEditInputChange}>
                                {priorityOptions(options)}
                            </select>
                        </label>
                        <button
                            className="w-full px-4 py-1 mb-2 bg-gray-700 text-zinc-50 text-2xl font-semibold rounded rounded-xl
                        dark:bg-zinc-50 dark:text-gray-700"
                            type="submit">
                            Save changes
                        </button>
                    </form>
                </article>
            </div>
            <button
                type="button"
                aria-label="close-modal"
                onClick={onTodoEditToggleClick}
                className="fixed top-0 left-0 w-full h-screen
                bg-gray-700 bg-opacity-30 z-20"
            />
        </div>
    );
}

TodoEditModal.propTypes = {
    editState: PropTypes.shape({
        isEditToggled: PropTypes.bool,
        editedTodo: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isFinished: PropTypes.bool,
            deadline: PropTypes.string,
            priority: PropTypes.string,
            date: PropTypes.string
        }),
        errors: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    onTodoEditToggleClick: PropTypes.func.isRequired,
    onTodoEditSaveClick: PropTypes.func.isRequired,
    onTodoEditInputChange: PropTypes.func.isRequired
};

export default TodoEditModal;
