import React from 'react';
import PropTypes from 'prop-types';

const capitalizeFilterName = (filter) => {
    const capitalizedLetter = filter.charAt(0).toUpperCase();
    const restOfFilter = filter.slice(1, filter.length);
    return `${capitalizedLetter}${restOfFilter}`;
};

function OrganiserFilters({ filters, currentFilter, onButtonClick }) {
    return (
        <header className="list__filters">
            {filters.map((filter) => (
                <button
                    className={filter === currentFilter ? 'bg-emerald-500' : ''}
                    key={filter.toString()}
                    type="button"
                    onClick={onButtonClick}>
                    {capitalizeFilterName(filter)}
                </button>
            ))}
        </header>
    );
}

OrganiserFilters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    currentFilter: PropTypes.string,
    onButtonClick: PropTypes.func
};
OrganiserFilters.defaultProps = {
    filters: [],
    currentFilter: '',
    onButtonClick: null
};

export default OrganiserFilters;
