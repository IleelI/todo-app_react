import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

function TodoListSorting() {
    return (
        <div className="list-sorting">
            <h5>
                Sort by: <span className="applied-sort">Priority Ascending</span>
            </h5>
            <button type="button">
                <ChevronDownIcon className="w-4 h-4" />
                <ChevronUpIcon className="w-4 h-4" />
            </button>
            <ul className="sorting">
                <li className="selected-sort">Priority Ascending</li>
                <li>Priority Descending</li>
                <li>Oldest</li>
                <li>Newest</li>
            </ul>
        </div>
    );
}

export default TodoListSorting;
