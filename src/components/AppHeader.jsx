import React from 'react';
import PropTypes from 'prop-types';

function AppHeader({ appName, appSlogan }) {
    return (
        <header className="mb-8 px-8 py-4 bg-slate-50 rounded-2xl drop-shadow-lg dark:bg-slate-700">
            <h1 className="text-3xl font-bold text-emerald-500">{appName}</h1>
            <h3 className="app__slogan text-xl text-slate-700 dark:text-slate-300">{appSlogan}</h3>
        </header>
    );
}

AppHeader.propTypes = {
    appName: PropTypes.string,
    appSlogan: PropTypes.string
};
AppHeader.defaultProps = {
    appName: 'Doify',
    appSlogan: "Let's get it done!"
};

export default AppHeader;
