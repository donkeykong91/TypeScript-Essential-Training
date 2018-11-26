interface Todo {

    name: string;

    completed?: boolean;

}

interface ITodoService {

    add(todo: Todo): Todo;

    delete(todoId: number): void;

    getAll(): Todo[];

    getById(todoId: number): Todo;

}

var todo: Todo = 

    { 

        name: 'Pick up drycleaning'
    
    };