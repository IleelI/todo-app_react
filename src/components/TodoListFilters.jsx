import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

function TodoListFilters() {
    return (
        <div className="list-filters">
            <h5>
                Filters: <span className="applied-filters">All, Important</span>
            </h5>
            <button type="button">
                <ChevronDownIcon className="w-4 h-4" />
                <ChevronUpIcon className="w-4 h-4" />
            </button>
            <ul className="filters">
                <li className="selected-filter">All</li>
                <li>Finished</li>
                <li>Unfinished</li>
                <li className="selected-filter">Important</li>
                <li>Normal</li>
                <li>Not Important</li>
            </ul>
        </div>
    );
}

export default TodoListFilters;
