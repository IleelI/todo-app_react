import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

function SelectToggler({ isSelectToggled, onSelectTogglerClick }) {
    return (
        <button type="button" onClick={onSelectTogglerClick}>
            {isSelectToggled ? (
                <ChevronUpIcon className="w-4 h-4" />
            ) : (
                <ChevronDownIcon className="w-4 h-4" />
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
