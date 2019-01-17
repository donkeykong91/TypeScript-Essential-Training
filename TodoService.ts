interface IIdGenerator {

    nextId: number;

}

class TodoService implements ITodoService, IIdGenerator{

    private static _lastId: number = 0;

    get nextId() {

        return TodoService._lastId += 1;

    }

    constructor(private todos: Todo[]) {}

    add(todo: Todo) {

        todo.id = this.nextId;

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