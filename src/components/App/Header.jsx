import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function Header({ isDarkModeToggled, onDarkModeToggleClick }) {
    return (
        <header
            className="w-full relative py-0.5 mb-12 border border-gray-700
            rounded-lg bg-zinc-50 dark:border-zinc-50 dark:bg-gray-700
            sm:w-3/5 sm:min-w-320 lg:w-2/5">
            <h1 className="font-semibold text-center text-2xl dark:text-zinc-50">Doify</h1>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full bg-gray-700
                rounded-md text-zinc-50 dark:text-gray-700 dark:bg-zinc-50"
                type="button"
                onClick={onDarkModeToggleClick}>
                {isDarkModeToggled ? (
                    <SunIcon className="h-full w-auto p-1.5" />
                ) : (
                    <MoonIcon className="h-full w-auto p-1.5" />
                )}
            </button>
        </header>
    );
}

Header.propTypes = {
    isDarkModeToggled: PropTypes.bool.isRequired,
    onDarkModeToggleClick: PropTypes.func.isRequired
};

export default Header;
