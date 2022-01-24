import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/outline';

function OrganiserInput({ todo: { value }, onFormSubmit, onInputChange }) {
    return (
        <form className="todo__input" onSubmit={onFormSubmit}>
            <label htmlFor="todo">
                <h3>Enter your task:</h3>
                <input
                    name="todo"
                    type="text"
                    value={value}
                    onChange={onInputChange}
                    placeholder="Feed the cat."
                />
            </label>
            <button type="submit" value="Submit">
                Add todo
                <PlusIcon />
            </button>
        </form>
    );
}

OrganiserInput.propTypes = {
    todo: PropTypes.shape({
        value: PropTypes.string,
        id: PropTypes.string
    }),
    onFormSubmit: PropTypes.func,
    onInputChange: PropTypes.func
};
OrganiserInput.defaultProps = {
    todo: {
        value: '',
        id: ''
    },
    onFormSubmit: null,
    onInputChange: null
};

export default OrganiserInput;
