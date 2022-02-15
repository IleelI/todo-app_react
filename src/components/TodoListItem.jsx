import React from 'react';
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { getTodoImportance } from '../utils/utils';
import { FILTERS } from '../utils/constants';

function getBarColor(importance) {
    const { PRIORITY } = FILTERS;
    const { IMPORTANT, NORMAL } = PRIORITY;
    if (importance === IMPORTANT) return 'before:bg-amber-700';
    if (importance === NORMAL) return 'before:bg-amber-500';
    return 'before:bg-amber-300';
}

function TodoListItem({ todo, onTodoRemoveClick, onTodoFinishClick, onTodoEditToggleClick }) {
    const { id, name, deadline, priority, date, isFinished } = todo;
    const importance = getTodoImportance(priority);
    const barColor = getBarColor(importance);
    const finishedStyle = 'line-through text-gray-400 dark:text-zinc-400';
    return (
        <li className={`importance-bar flex flex-col py-1 ${barColor}`}>
            <div>
                <h4 className={`mb-1 font-semibold ${isFinished ? finishedStyle : null}`}>
                    {name}
                </h4>
                <small className={`block mb-0.5 font-mono ${isFinished ? finishedStyle : null}`}>
                    Created on: {date}
                </small>
                <small className={`block font-mono ${isFinished ? finishedStyle : null}`}>
                    Deadline: {deadline}
                </small>
            </div>
            <div className="flex items-center mt-4 ml-auto">
                <button
                    className="mx-2 p-2 text-zinc-50 bg-gray-700
                     rounded rounded-lg dark:bg-zinc-50 dark:text-gray-700"
                    onClick={() => {
                        onTodoEditToggleClick(todo);
                    }}
                    type="button">
                    <PencilIcon className="w-4 h-4" />
                </button>
                <button
                    className="mx-2 p-2 text-red-500 bg-gray-700
                     rounded rounded-lg dark:bg-zinc-50"
                    type="button"
                    onClick={() => {
                        onTodoRemoveClick(id);
                    }}>
                    <TrashIcon className="w-4 h-4" />
                </button>
                <button
                    className="mx-2 p-2 text-emerald-500 bg-gray-700
                     rounded rounded-lg dark:bg-zinc-50"
                    type="button"
                    onClick={() => {
                        onTodoFinishClick(id);
                    }}>
                    <CheckIcon className="w-4 h-4" />
                </button>
            </div>
        </li>
    );
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        date: PropTypes.string,
        name: PropTypes.string,
        deadline: PropTypes.string,
        priority: PropTypes.string,
        isFinished: PropTypes.bool
    }).isRequired,
    onTodoFinishClick: PropTypes.func.isRequired,
    onTodoRemoveClick: PropTypes.func.isRequired,
    onTodoEditToggleClick: PropTypes.func.isRequired
};
export default TodoListItem;
