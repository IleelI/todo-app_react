import React from 'react';
import { MoonIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <header>
            <h1>Doify</h1>
            <button type="button">
                <MoonIcon className="w-8 h-8" />
            </button>
        </header>
    );
}

export default Header;
