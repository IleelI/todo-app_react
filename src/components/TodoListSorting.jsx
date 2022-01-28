import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { SORTING } from '../constants';

function TodoListSorting() {
    const sortingOptions = [...Object.entries(SORTING)];
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
                {sortingOptions.map(([key, val]) => (
                    <li key={key}>{val}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListSorting;
