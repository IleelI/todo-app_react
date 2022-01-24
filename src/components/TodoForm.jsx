import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/outline';

function TodoForm({ todo: { value }, onTodoFormSubmit, onTodoInputChange }) {
    return (
        <form className="todo__input" onSubmit={onTodoFormSubmit}>
            <label htmlFor="todo">
                <h3>Enter your task:</h3>
                <input
                    name="todo"
                    type="text"
                    value={value}
                    onChange={onTodoInputChange}
                    placeholder="Feed the cat."
                />
            </label>
            <button type="submit" value="Submit">
                Add todo
                <PlusIcon className="w-12 h-12 px-2 py-2 bg-slate-200 rounded-full text-emerald-500" />
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
