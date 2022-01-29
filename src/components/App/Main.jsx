import React, { Component } from 'react';
import TodoListWrapper from '../TodoListWrapper';
import TodoListFormWrapper from '../TodoListFormWrapper';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.handleNewTodoAdd = this.handleNewTodoAdd.bind(this);
        this.handleTodoFinishClick = this.handleTodoFinishClick.bind(this);
        this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
    }

    handleNewTodoAdd(todo) {
        this.setState(({ todos }) => ({
            todos: [...todos, todo]
        }));
    }

    handleTodoRemoveClick(id) {
        this.setState(({ todos }) => ({
            todos: todos.filter((todo) => todo.id !== id)
        }));
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

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoListFormWrapper addNewTodo={this.handleNewTodoAdd} />
                <TodoListWrapper
                    todos={todos}
                    onTodoFinishClick={this.handleTodoFinishClick}
                    onTodoRemoveClick={this.handleTodoRemoveClick}
                />
            </div>
        );
    }
}

export default Main;
