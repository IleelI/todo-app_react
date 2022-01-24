import React from 'react';
import PropTypes from 'prop-types';
import { TrashIcon, CheckIcon } from '@heroicons/react/solid';

function TodoItem({ value, id, onFinishTodoClick, onRemoveTodoClick }) {
    return (
        <li className="flex items-center justify-between px-4 py-4 bg-slate-500 text-neutral-50">
            <h3 className="text-lg text-white py-2 px-2">{value}</h3>
            <div className="flex items-center justify-between">
                <button type="button" className="mx-4" onClick={() => onRemoveTodoClick(id)}>
                    <TrashIcon className="w-10 h-10 p-2 rounded-full bg-slate-200 text-red-500" />
                </button>
                <button type="button" className="mx-4" onClick={() => onFinishTodoClick(id)}>
                    <CheckIcon className="w-10 h-10 p-2 rounded-full bg-slate-200 text-emerald-500" />
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
