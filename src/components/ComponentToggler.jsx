import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function ComponentToggler({
    isComponentToggled,
    componentTitle,
    onButtonClick: handleButtonClick
}) {
    return (
        <header className="component-toggler">
            <h3>{componentTitle}</h3>
            <button type="button" onClick={handleButtonClick}>
                {isComponentToggled ? (
                    <MinusIcon className="w-8 h-8" />
                ) : (
                    <PlusIcon className="w-8 h-8" />
                )}
            </button>
        </header>
    );
}
ComponentToggler.propTypes = {
    isComponentToggled: PropTypes.bool,
    componentTitle: PropTypes.string,
    onButtonClick: PropTypes.func
};
ComponentToggler.defaultProps = {
    isComponentToggled: false,
    componentTitle: 'Your Component Title',
    onButtonClick: null
};

export default ComponentToggler;
