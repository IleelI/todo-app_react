import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

function SelectToggler({ isSelectToggled, onSelectTogglerClick }) {
    return (
        <button
            className="col-start-2 col-end-3 bg-zinc-50 rounded text-slate-700 dark:bg-gray-700 dark:text-zinc-50"
            type="button"
            onClick={onSelectTogglerClick}>
            {isSelectToggled ? (
                <ChevronUpIcon className="w-6 h-6" />
            ) : (
                <ChevronDownIcon className="w-6 h-6" />
            )}
        </button>
    );
}

SelectToggler.propTypes = {
    isSelectToggled: PropTypes.bool,
    onSelectTogglerClick: PropTypes.func
};
SelectToggler.defaultProps = {
    isSelectToggled: false,
    onSelectTogglerClick: null
};

export default SelectToggler;
