import React from 'react';
import PropTypes from 'prop-types';

function OrganiserList({ todos }) {
    return (
        <ul className="list__contents">
            {todos.map((todo) => (
                /* todo add uuid id generation for todo items */
                <li className="bg-blue-400 text-neutral-50">{todo}</li>
            ))}
        </ul>
    );
}

OrganiserList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string)
};
OrganiserList.defaultProps = {
    todos: []
};

export default OrganiserList;
