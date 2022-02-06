import React, { Component } from 'react';
import { delay } from 'lodash';
import TodoListWrapper from '../TodoListWrapper';
import TodoListFormWrapper from '../TodoListFormWrapper';
import { FLASH_DURATION, FLASH_MESSAGE_TYPES } from '../../utils/constants';
import FlashMessage from '../FlashMessage';

/*
    TODO
        4) Look for possible improvements in components and app logic.
        5) Polish code for production
 */

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            flashState: {
                isToggled: false,
                flashType: null,
                flashText: null
            }
        };
        this.handleNewTodoAdd = this.handleNewTodoAdd.bind(this);
        this.handleTodoFinishClick = this.handleTodoFinishClick.bind(this);
        this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
        this.handleFlashToggleAction = this.handleFlashToggleAction.bind(this);
    }

    handleNewTodoAdd(todo) {
        this.setState(
            ({ todos }) => ({
                todos: [...todos, todo]
            }),
            () => {
                this.handleFlashToggleAction('Todo has been added.', FLASH_MESSAGE_TYPES.INFO);
            }
        );
    }

    handleTodoRemoveClick(id) {
        this.setState(
            ({ todos }) => ({
                todos: todos.filter((todo) => todo.id !== id)
            }),
            () => {
                this.handleFlashToggleAction('Todo has been removed.', FLASH_MESSAGE_TYPES.ERROR);
            }
        );
    }

    handleTodoFinishClick(id) {
        const { todos: oldTodos } = this.state;
        const oldTodo = { ...oldTodos.find(({ id: todoId }) => todoId === id) };
        const newTodo = { ...oldTodo, isFinished: !oldTodo.isFinished };
        const newTodos = oldTodos.map((todo) => {
            if (todo.id === id) return newTodo;
            return todo;
        });
        this.setState(() => ({
            todos: newTodos
        }));
    }

    handleFlashToggleAction(flashText, flashType) {
        this.setState(
            () => ({
                flashState: {
                    isToggled: true,
                    flashType,
                    flashText
                }
            }),
            () => {
                delay(() => {
                    this.setState(() => ({
                        flashState: {
                            isToggled: false,
                            flashType,
                            flashText
                        }
                    }));
                }, FLASH_DURATION);
            }
        );
    }

    render() {
        const { todos, flashState } = this.state;
        return (
            <main className="relative">
                {flashState.isToggled ? <FlashMessage flashState={flashState} /> : null}
                <TodoListFormWrapper addNewTodo={this.handleNewTodoAdd} />
                <TodoListWrapper
                    todos={todos}
                    onTodoFinishClick={this.handleTodoFinishClick}
                    onTodoRemoveClick={this.handleTodoRemoveClick}
                />
            </main>
        );
    }
}

export default Main;
