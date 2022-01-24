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
        <header className="list__filters">
            {Object.entries(filters).map(([filterName, filterValue]) => (
                <button
                    className={currentFilter === filterValue ? 'bg-emerald-500' : ''}
                    key={filterName}
                    type="button"
                    onClick={onFilterButtonClick}>
                    {capitalizeFilterName(filterValue)}
                </button>
            ))}
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
