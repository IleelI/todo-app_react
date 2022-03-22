import React, { Component } from 'react';
import { delay } from 'lodash';
import TodoListWrapper from '../TodoListWrapper';
import TodoListFormWrapper from '../TodoListFormWrapper';
import FlashMessage from '../FlashMessage';
import TodoEditModal from '../TodoEditModal';
import { FLASH_DURATION, FLASH_MESSAGE_TYPES } from '../../utils/constants';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            flashState: {
                isToggled: false,
                flashType: null,
                flashText: null
            },
            editState: {
                isEditToggled: false,
                editedTodo: null
            }
        };
        this.handleNewTodoAdd = this.handleNewTodoAdd.bind(this);
        this.handleTodoFinishClick = this.handleTodoFinishClick.bind(this);
        this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
        this.handleTodoEditSaveClick = this.handleTodoEditSaveClick.bind(this);
        this.handleTodoEditInputChange = this.handleTodoEditInputChange.bind(this);
        this.handleTodoEditToggleClick = this.handleTodoEditToggleClick.bind(this);
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

    handleTodoEditToggleClick(todo = null) {
        this.setState(({ editState }) => ({
            editState: {
                isEditToggled: !editState.isEditToggled,
                editedTodo: todo,
                errors: []
            }
        }));
    }

    handleTodoEditInputChange({ target }) {
        const { editState } = this.state;
        const { name, value } = target;
        this.setState({
            editState: {
                ...editState,
                editedTodo: {
                    ...editState.editedTodo,
                    [name]: value
                }
            }
        });
    }

    handleTodoEditSaveClick(e) {
        e.preventDefault();
        const { todos, editState } = this.state;
        const errors = Object.entries(editState.editedTodo)
            .map(([key, val]) => {
                if (val.length === 0) return `Todo ${key}, must be a non-empty value!`;
                return null;
            })
            .filter((error) => error !== null);
        if (errors.length !== 0) {
            this.setState({
                editState: {
                    ...editState,
                    errors
                }
            });
            return;
        }
        const { editedTodo } = editState;
        const targetIndex = todos.findIndex(({ id }) => id === editedTodo.id);
        const oldTodo = { ...todos[targetIndex] };
        const newTodo = Object.entries({ ...editedTodo });
        let hasChanged = false;
        newTodo.forEach(([key, val]) => {
            if (oldTodo[key] !== val) hasChanged = true;
        });
        if (!hasChanged) {
            this.handleTodoEditToggleClick(null);
            this.handleFlashToggleAction('No changes made', FLASH_MESSAGE_TYPES.INFO);
            return;
        }
        const { todos: newTodos } = this.state;
        newTodos[targetIndex] = { ...editedTodo };
        this.setState(
            () => ({
                todos: newTodos
            }),
            () => {
                this.handleTodoEditToggleClick(null);
                this.handleFlashToggleAction('Todo changes saved', FLASH_MESSAGE_TYPES.INFO);
            }
        );
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
        const { todos, flashState, editState } = this.state;
        return (
            <main className="w-full relative sm:w-3/5 sm:min-w-320 lg:w-2/5">
                {flashState.isToggled ? <FlashMessage flashState={flashState} /> : null}
                {editState.isEditToggled ? (
                    <TodoEditModal
                        editState={editState}
                        onTodoEditInputChange={this.handleTodoEditInputChange}
                        onTodoEditToggleClick={this.handleTodoEditToggleClick}
                        onTodoEditSaveClick={this.handleTodoEditSaveClick}
                    />
                ) : null}
                <TodoListFormWrapper addNewTodo={this.handleNewTodoAdd} />
                <TodoListWrapper
                    todos={todos}
                    onTodoFinishClick={this.handleTodoFinishClick}
                    onTodoRemoveClick={this.handleTodoRemoveClick}
                    onTodoEditToggleClick={this.handleTodoEditToggleClick}
                />
            </main>
        );
    }
}

export default Main;
