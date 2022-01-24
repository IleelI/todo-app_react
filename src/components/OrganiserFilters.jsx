import React from 'react';
import PropTypes from 'prop-types';
import { filters } from '../constants';

const capitalizeFilterName = (filter) => {
    const capitalizedLetter = filter.charAt(0).toUpperCase();
    const restOfFilter = filter.slice(1, filter.length);
    return `${capitalizedLetter}${restOfFilter}`;
};

function OrganiserFilters({ currentFilter, onButtonClick }) {
    return (
        <header className="list__filters">
            {Object.entries(filters).map(([filterName, filterValue]) => (
                <button
                    className={currentFilter === filterValue ? 'bg-emerald-500' : ''}
                    key={filterName}
                    type="button"
                    onClick={onButtonClick}>
                    {capitalizeFilterName(filterValue)}
                </button>
            ))}
        </header>
    );
}

OrganiserFilters.propTypes = {
    currentFilter: PropTypes.string,
    onButtonClick: PropTypes.func
};
OrganiserFilters.defaultProps = {
    currentFilter: '',
    onButtonClick: null
};

export default OrganiserFilters;
