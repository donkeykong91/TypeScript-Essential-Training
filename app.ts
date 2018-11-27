enum TodoState {

    New = 1,

    Active,

    Completed, 

    Deleted

}

interface Todo {

    name: string;

    state: TodoState;

}

var todo: Todo = {

    name: 'Pick up drycleaning',

    state: TodoState.New

}

function delete(todo: Todo) {

    if (todo.state != TodoState.Completed) {

        throw "Can't delete incomplete task!";

    }

}