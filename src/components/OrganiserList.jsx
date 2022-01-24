import React from 'react';
import PropTypes from 'prop-types';
import { filters } from '../constants';

function ListItem({ value, bgColor, fontColor }) {
    return <li className={`bg-${bgColor}-500 text-${fontColor}-50`}>{value}</li>;
}

ListItem.propTypes = {
    value: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string
};
ListItem.defaultProps = {
    value: '',
    bgColor: '',
    fontColor: ''
};

function OrganiserList({ todos, currentFilter }) {
    return (
        <ul className="list__contents">
            {todos.map(({ value, id, isFinished }) => {
                /* todo improve conditions checking and add color constants to constants.js */
                if (currentFilter === filters.FINISHED) {
                    return isFinished ? (
                        <ListItem key={id} value={value} bgColor="emerald" fontColor="neutral" />
                    ) : null;
                }
                if (currentFilter === filters.UNFINISHED) {
                    return !isFinished ? (
                        <ListItem key={id} value={value} bgColor="slate" fontColor="neutral" />
                    ) : null;
                }
                return isFinished ? (
                    <ListItem key={id} value={value} bgColor="emerald" fontColor="neutral" />
                ) : (
                    <ListItem key={id} value={value} bgColor="slate" fontColor="neutral" />
                );
            })}
        </ul>
    );
}

OrganiserList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string,
            isFinished: PropTypes.bool
        })
    ),
    currentFilter: PropTypes.string
};
OrganiserList.defaultProps = {
    todos: [],
    currentFilter: ''
};

export default OrganiserList;
