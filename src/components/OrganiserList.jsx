import React from 'react';
import PropTypes from 'prop-types';

function OrganiserList({ todos }) {
    return (
        <ul className="list__contents">
            {todos.map(({ value, id }) => (
                <li key={id} className="bg-blue-400 text-neutral-50">
                    {value}
                </li>
            ))}
        </ul>
    );
}

OrganiserList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string
        })
    )
};
OrganiserList.defaultProps = {
    todos: []
};

export default OrganiserList;
