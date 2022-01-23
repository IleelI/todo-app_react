import React from 'react';
import PropTypes from 'prop-types';

function AppHeader({ appName, appSlogan }) {
    return (
        <header className="app__header">
            <h1 className="app__name">{appName}</h1>
            <h3 className="app__slogan">{appSlogan}</h3>
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
