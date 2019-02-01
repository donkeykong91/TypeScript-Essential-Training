import Model = require('./model');

import Todo = Model.Todo;


let _lastId: number = 0;

export interface ITodoService {

    add(todo: Todo): Todo;

    delete(todoId: number): void;

    getAll(): Todo[];

    getById(todoId: number): Todo;

}

function generateTodoId() {

    return _lastId += 1;

}


export class TodoService implements ITodoService{

    constructor(private todos: Todo[]) {}

    add(todo: Todo): Todo {

        todo.id = generateTodoId();

        this.todos.push(todo);

        return todo;

    }

    getAll() {

        var clone = JSON.stringify(this.todos);

        return JSON.parse(clone);

    }

    getById(todoId: number): Todo {

        var filtered = this.todos.filter( x => x.id == todoId);

        if (filtered.length) {

            return filtered[0];

        }

        return null;

    }

    delete(todoId: number): void {

        var toDelete = this.getById(todoId);

        var deletedIndex = this.todos.indexOf(toDelete);

        this.todos.splice(deletedIndex, 1);

    }

}
