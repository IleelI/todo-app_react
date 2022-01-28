import React from 'react';
import { MinusIcon } from '@heroicons/react/solid';

function ComponentToggler() {
    return (
        <header className="component-toggler">
            <h3>Your Component Title</h3>
            <button type="button">
                <MinusIcon className="w-8 h-8" />
            </button>
        </header>
    );
}

export default ComponentToggler;
