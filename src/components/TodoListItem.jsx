import React from 'react';
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import { getTodoImportance } from '../utils/utils';

function TodoListItem({ todo, onTodoRemoveClick, onTodoFinishClick }) {
    const { id, name, deadline, priority } = todo;
    const importance = getTodoImportance(priority);
    return (
        <li className={importance}>
            <h4>{name}</h4>
            <small>Deadline: {deadline}</small>
            <div className="todoOptions">
                <button type="button">
                    <PencilIcon className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => onTodoRemoveClick(id)}>
                    <TrashIcon className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => onTodoFinishClick(id)}>
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
    onTodoRemoveClick: PropTypes.func.isRequired
};
export default TodoListItem;
