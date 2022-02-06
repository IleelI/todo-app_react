import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import ComponentToggler from './ComponentToggler';
import TodoListForm from './TodoListForm';
import { FILTERS } from '../utils/constants';
import { getFullTimeAndDate } from '../utils/utils';

class TodoListFormWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormToggled: true,
            formState: {
                todo: {
                    id: uuid(),
                    name: '',
                    deadline: '',
                    priority: FILTERS.PRIORITY.NORMAL,
                    isFinished: false,
                    date: getFullTimeAndDate()
                },
                errors: []
            }
        };
        this.handleToggleFormClick = this.handleToggleFormClick.bind(this);
        this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
        this.handleTodoFormSubmit = this.handleTodoFormSubmit.bind(this);
    }

    handleToggleFormClick() {
        this.setState(({ isFormToggled }) => ({
            isFormToggled: !isFormToggled
        }));
    }

    handleTodoInputChange({ target }) {
        const { formState } = this.state;
        const { name, value } = target;
        this.setState({
            formState: {
                ...formState,
                todo: {
                    ...formState.todo,
                    [name]: value
                }
            }
        });
    }

    handleTodoFormSubmit(e) {
        e.preventDefault();
        const { formState } = this.state;
        const errors = Object.entries(formState.todo)
            .map(([key, val]) => {
                if (val.length === 0) return `Todo ${key}, must be a non-empty value!`;
                return null;
            })
            .filter((error) => error !== null);
        if (errors.length !== 0) {
            this.setState({
                formState: {
                    ...formState,
                    errors
                }
            });
            return;
        }
        const { addNewTodo } = this.props;
        const { todo } = formState;
        this.setState(
            () => ({
                formState: {
                    todo: {
                        id: uuid(),
                        date: getFullTimeAndDate(),
                        name: '',
                        deadline: '',
                        priority: FILTERS.PRIORITY.NORMAL,
                        isFinished: false
                    },
                    errors: []
                }
            }),
            () => addNewTodo(todo)
        );
    }

    render() {
        const { isFormToggled, formState } = this.state;
        return (
            <article className="mb-8 bg-zinc-50 rounded-lg dark:bg-gray-700">
                <ComponentToggler
                    isComponentToggled={isFormToggled}
                    componentTitle="Add new todo"
                    onButtonClick={this.handleToggleFormClick}
                />
                {isFormToggled ? (
                    <TodoListForm
                        formState={formState}
                        onTodoInputChange={this.handleTodoInputChange}
                        onTodoFormSubmit={this.handleTodoFormSubmit}
                    />
                ) : null}
            </article>
        );
    }
}

TodoListFormWrapper.propTypes = {
    addNewTodo: PropTypes.func
};
TodoListFormWrapper.defaultProps = {
    addNewTodo: null
};

export default TodoListFormWrapper;
