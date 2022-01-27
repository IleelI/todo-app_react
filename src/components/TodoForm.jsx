import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/outline';

function TodoForm({ todo: { value }, onTodoFormSubmit, onTodoInputChange }) {
    return (
        <form className="mb-8 flex flex-col sm:container sm:mx-auto" onSubmit={onTodoFormSubmit}>
            <label className="mb-4" htmlFor="todo">
                <h3 className="mb-2 text-xl font-semibold dark:text-slate-100">New Todo:</h3>
                <input
                    name="todo"
                    type="text"
                    value={value}
                    onChange={onTodoInputChange}
                    className="
                    w-full px-4 py-1.5 rounded-md text-base bg-slate-50
                    shadow-inner shadow-slate-300 border-b border-slate-300
                    focus:text-emerald-700 focus:shadow-emerald-200 outline-0
                    dark:bg-slate-600 dark:shadow-inner dark:shadow-slate-800
                    dark:text-slate-300 dark:focus:text-emerald-500 dark:border-slate-700"
                />
            </label>
            <button
                className="
                w-full px-4 py-2 flex items-center self-end rounded-md bg-emerald-400 hover:bg-emerald-600 text-white
                shadow drop-shadow-md shadow-slate-300
                sm:container sm:w-1/3
                dark:shadow dark:drop-shadow-md dark:shadow-slate-600"
                type="submit"
                value="Submit">
                <p className="text-left flex-1">Add todo</p>
                <PlusIcon className="w-6 h-6 flex-0 text-white-500" />
            </button>
        </form>
    );
}

TodoForm.propTypes = {
    todo: PropTypes.shape({
        value: PropTypes.string,
        id: PropTypes.string,
        isFinished: PropTypes.bool
    }),
    onTodoFormSubmit: PropTypes.func,
    onTodoInputChange: PropTypes.func
};
TodoForm.defaultProps = {
    todo: {
        value: '',
        id: '',
        isFinished: false
    },
    onTodoFormSubmit: null,
    onTodoInputChange: null
};

export default TodoForm;
