import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { FILTERS } from '../constants';

function TodoListFilters() {
    const filterOptions = [...Object.entries(FILTERS.STATE), ...Object.entries(FILTERS.PRIORITY)];
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
                {filterOptions.map(([key, val]) => (
                    <li key={key}>{val}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListFilters;
