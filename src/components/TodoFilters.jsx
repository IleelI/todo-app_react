import React from 'react';
import PropTypes from 'prop-types';
import { filters } from '../constants';

const capitalizeFilterName = (filter) => {
    const capitalizedLetter = filter.charAt(0).toUpperCase();
    const restOfFilter = filter.slice(1, filter.length);
    return `${capitalizedLetter}${restOfFilter}`;
};

function TodoFilters({ currentFilter, onFilterButtonClick }) {
    return (
        <header className="mb-4 flex flex-col justify-between flex-wrap sm:flex-row">
            {Object.entries(filters).map(([filterName, filterValue]) => {
                const selectedFilterStyle =
                    currentFilter === filterValue ? 'bg-emerald-400 text-white' : '';
                return (
                    <button
                        className={`my-1 px-4 py-1.5 font-medium rounded rounded-md ${selectedFilterStyle}`}
                        key={filterName}
                        type="button"
                        onClick={onFilterButtonClick}>
                        {capitalizeFilterName(filterValue)}
                    </button>
                );
            })}
        </header>
    );
}

TodoFilters.propTypes = {
    currentFilter: PropTypes.string,
    onFilterButtonClick: PropTypes.func
};
TodoFilters.defaultProps = {
    currentFilter: '',
    onFilterButtonClick: null
};

export default TodoFilters;
