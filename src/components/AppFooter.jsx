import React from 'react';
import PropTypes from 'prop-types';

function AppFooter({ author }) {
    return (
        <footer className="app__footer">
            <h3 className="app__author">Created by {author}.</h3>
            <h4>Copyright 2022©, created on 23.01.2022</h4>
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
