import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function Header({ isDarkModeToggled, onDarkModeToggleClick }) {
    return (
        <header>
            <h1>Doify</h1>
            <button type="button" onClick={onDarkModeToggleClick}>
                {isDarkModeToggled ? (
                    <SunIcon className="w-8 h-8" />
                ) : (
                    <MoonIcon className="w-8 h-8" />
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
