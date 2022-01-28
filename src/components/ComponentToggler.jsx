import React from 'react';
import { MinusIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function ComponentToggler({ onButtonClick: handleButtonClick, componentTitle }) {
    return (
        <header className="component-toggler">
            <h3>{componentTitle}</h3>
            <button type="button" onClick={handleButtonClick}>
                <MinusIcon className="w-8 h-8" />
            </button>
        </header>
    );
}
ComponentToggler.propTypes = {
    componentTitle: PropTypes.string,
    onButtonClick: PropTypes.func
};
ComponentToggler.defaultProps = {
    componentTitle: 'Your Component Title',
    onButtonClick: null
};

export default ComponentToggler;
