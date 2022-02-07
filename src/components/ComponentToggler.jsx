import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function ComponentToggler({
    isComponentToggled,
    componentTitle,
    onButtonClick: handleButtonClick
}) {
    return (
        <header
            className="relative px-8 py-0.5 border border-gray-700
            rounded-lg bg-zinc-50 dark:border-zinc-50 dark:bg-gray-700">
            <h3 className="mr-4 font-medium text-left text-2xl dark:text-zinc-50">
                {componentTitle}
            </h3>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full bg-gray-700
                rounded-md text-zinc-50 dark:text-gray-700 dark:bg-zinc-50"
                type="button"
                onClick={handleButtonClick}>
                {isComponentToggled ? (
                    <MinusIcon className="h-full w-auto p-1.5" />
                ) : (
                    <PlusIcon className="h-full w-auto p-1.5" />
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
