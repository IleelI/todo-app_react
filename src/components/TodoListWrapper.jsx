import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentToggler from './ComponentToggler';
import TodoListOptions from './TodoListOptions';
import TodoList from './TodoList';

// eslint-disable-next-line react/prefer-stateless-function
class TodoListWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTodoListToggled: true
        };
        this.handleToggleTodoListClick = this.handleToggleTodoListClick.bind(this);
    }

    handleToggleTodoListClick() {
        this.setState(({ isTodoListToggled }) => ({
            isTodoListToggled: !isTodoListToggled
        }));
    }

    render() {
        const { isTodoListToggled } = this.state;
        const { listState } = this.props;
        return (
            <main className="todo-list-wrapper">
                <ComponentToggler
                    componentTitle="Your todos"
                    onButtonClick={this.handleToggleTodoListClick}
                />
                {isTodoListToggled ? (
                    <div>
                        <TodoListOptions listState={listState} />
                        <TodoList listState={listState} />
                    </div>
                ) : null}
            </main>
        );
    }
}

TodoListWrapper.propTypes = {
    listState: PropTypes.shape({
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                deadline: PropTypes.string,
                priority: PropTypes.string
            })
        ),
        selectedFilters: PropTypes.arrayOf(PropTypes.string),
        selectedSorting: PropTypes.string
    })
};
TodoListWrapper.defaultProps = {
    listState: null
};

export default TodoListWrapper;
