import React, { Component } from 'react';
import TodoListFormNameInput from './TodoListFormNameInput';
import TodoListFormDeadlineInput from './TodoListFormDeadlineInput';
import TodoListFormPriorityInput from './TodoListFormPriorityInput';
import ComponentToggler from './ComponentToggler';

// eslint-disable-next-line react/prefer-stateless-function
class TodoListForm extends Component {
    render() {
        return (
            <article className="form-wrapper">
                <ComponentToggler />
                <form>
                    <TodoListFormNameInput />
                    <TodoListFormDeadlineInput />
                    <TodoListFormPriorityInput />
                    <button type="submit">Add Todo</button>
                </form>
            </article>
        );
    }
}

export default TodoListForm;
