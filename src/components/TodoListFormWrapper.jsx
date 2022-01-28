import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentToggler from './ComponentToggler';
import TodoListForm from './TodoListForm';

class TodoListFormWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormToggled: true
        };
        this.handleToggleFormClick = this.handleToggleFormClick.bind(this);
    }

    handleToggleFormClick() {
        this.setState(({ isFormToggled }) => ({
            isFormToggled: !isFormToggled
        }));
    }

    render() {
        const { isFormToggled } = this.state;
        const { formState, onTodoInputChange, onTodoFormSubmit } = this.props;
        return (
            <article className="form-wrapper">
                <ComponentToggler
                    componentTitle="Add new todo."
                    onButtonClick={this.handleToggleFormClick}
                />
                {isFormToggled ? (
                    <TodoListForm
                        formState={formState}
                        onTodoInputChange={onTodoInputChange}
                        onTodoFormSubmit={onTodoFormSubmit}
                    />
                ) : null}
            </article>
        );
    }
}

TodoListFormWrapper.propTypes = {
    formState: PropTypes.shape({
        todo: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            deadline: PropTypes.string,
            priority: PropTypes.string
        }),
        errors: PropTypes.arrayOf(PropTypes.string)
    }),
    onTodoInputChange: PropTypes.func,
    onTodoFormSubmit: PropTypes.func
};
TodoListFormWrapper.defaultProps = {
    formState: null,
    onTodoInputChange: null,
    onTodoFormSubmit: null
};

export default TodoListFormWrapper;
