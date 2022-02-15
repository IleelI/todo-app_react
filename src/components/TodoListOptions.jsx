import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS, SORTING } from '../utils/constants';
import SelectList from './SelectList';
import { getActiveOptionsString } from '../utils/utils';

const sortingOptions = [...Object.entries(SORTING)];
const filteringOptions = [...Object.entries(FILTERS.STATE), ...Object.entries(FILTERS.PRIORITY)];

function TodoListOptions({ listOptions, onNewFilterToggleClick, onNewSortingToggleClick }) {
    const { selectedFilters, selectedSorting } = listOptions;
    return (
        <nav className="flex flex-col">
            <SelectList
                options={filteringOptions}
                optionsInfo="Filters: "
                selectedOptionsInfo={getActiveOptionsString(selectedFilters)}
                selectedOptions={selectedFilters}
                onNewOptionToggleClick={onNewFilterToggleClick}
            />
            <SelectList
                options={sortingOptions}
                optionsInfo="Sort by: "
                selectedOptionsInfo={getActiveOptionsString(selectedSorting)}
                selectedOptions={selectedSorting}
                onNewOptionToggleClick={onNewSortingToggleClick}
            />
        </nav>
    );
}

TodoListOptions.propTypes = {
    listOptions: PropTypes.shape({
        selectedFilters: PropTypes.arrayOf(PropTypes.string),
        selectedSorting: PropTypes.arrayOf(PropTypes.string)
    }),
    onNewFilterToggleClick: PropTypes.func,
    onNewSortingToggleClick: PropTypes.func
};
TodoListOptions.defaultProps = {
    listOptions: null,
    onNewFilterToggleClick: null,
    onNewSortingToggleClick: null
};

export default TodoListOptions;
