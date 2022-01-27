import React from 'react';
import PropTypes from 'prop-types';
import { TrashIcon, CheckIcon } from '@heroicons/react/solid';

function TodoItem({ value, id, onFinishTodoClick, onRemoveTodoClick }) {
    return (
        <li
            className="
                mb-4 px-4 py-2 bg-slate-50 text-slate-900 rounded-2xl
                drop-shadow-md
                flex flex-col items-start-center justify-between
                sm:flex-row sm:items-center
                dark:bg-slate-600 dark:text-slate-50">
            <h3 className="mb-2 p-2 flex-1 text-lg hover:text-emerald-500 ease-in-out transition-colors sm:mb-0">
                {value}
            </h3>
            <div className="flex items-center justify-evenly">
                <button type="button" className="mx-4" onClick={() => onRemoveTodoClick(id)}>
                    <TrashIcon
                        className="
                        w-10 h-10 p-2 rounded-full text-red-500 bg-slate-100  hover:bg-slate-200
                        ease-in transition-colors"
                    />
                </button>
                <button type="button" className="mx-4" onClick={() => onFinishTodoClick(id)}>
                    <CheckIcon
                        className="
                        w-10 h-10 p-2 rounded-full text-emerald-500 bg-slate-100 hover:bg-slate-200
                        ease-in transition-colors"
                    />
                </button>
            </div>
        </li>
    );
}
TodoItem.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    onFinishTodoClick: PropTypes.func,
    onRemoveTodoClick: PropTypes.func
};
TodoItem.defaultProps = {
    value: '',
    id: '',
    onFinishTodoClick: null,
    onRemoveTodoClick: null
};

export default TodoItem;
