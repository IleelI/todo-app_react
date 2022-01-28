import React from 'react';
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

function TodoListItem() {
    return (
        <li className="absolute-priority-marker-placed::before">
            <h4>Feed the dog.</h4>
            <div className="todoOptions">
                <button type="button">
                    <PencilIcon className="w-4 h-4" />
                </button>
                <button type="button">
                    <TrashIcon className="w-4 h-4" />
                </button>
                <button type="button">
                    <CheckIcon className="w-4 h-4" />
                </button>
            </div>
        </li>
    );
}

export default TodoListItem;
