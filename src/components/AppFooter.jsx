import React from 'react';
import PropTypes from 'prop-types';

function AppFooter({ author }) {
    return (
        <footer className="px-8 py-4 bg-slate-50 rounded-2xl drop-shadow-md dark:bg-slate-700">
            <h3 className="mb-1 text-sm font-semibold font-mono dark:text-slate-300">
                Created by {author}.
            </h3>
            <h4 className="text-xs font-normal font-mono dark:text-slate-300">
                Copyright 2022©, created on 23.01.2022
            </h4>
        </footer>
    );
}

AppFooter.propTypes = {
    author: PropTypes.string
};
AppFooter.defaultProps = {
    author: 'Lorem Ipsum'
};

export default AppFooter;
