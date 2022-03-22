import React from 'react';

function Footer() {
    return (
        <footer
            className="w-full px-8 py-2 mb-12
            rounded-lg bg-zinc-50 dark:bg-gray-700 sm:w-3/5 sm:min-w-320 lg:w-2/5 ">
            <small className="block pb-1 text-xs font-semibold font-mono dark:text-zinc-100">
                Created by: Bartosz Elert
            </small>
            <small className="block text-xs font-mono dark:text-zinc-300">Copyright 2022©.</small>
        </footer>
    );
}

export default Footer;
