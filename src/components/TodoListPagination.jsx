import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

function TodoListPagination() {
    return (
        <nav className="list-pagination">
            <button type="button">
                <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <ol className="pagination__pages">
                <li>1</li>
                <li>2</li>
                <li>...</li>
                <li>4</li>
                <li>5</li>
            </ol>
            <button type="button">
                <ChevronRightIcon className="w-4 h-4" />
            </button>
        </nav>
    );
}

export default TodoListPagination;
