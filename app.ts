interface Todo {

    name: string;

    completed?: boolean;

}

interface JQuery {

    (selector: (string| any)): HTMLElement;

    fn: any;

    version: number;

}

interface jQueryElement {

    data(name: string): any;

    data(name: string, data: any): jQueryElement;

}

interface jQueryElement {

    todo(): Todo;

    todo(todo: Todo): jQueryElement;

}

var todo = 

    {
        name: 'Pick up drycleaning'
    };

$.fn.todo = function (todo?: Todo): Todo {

    if (todo) {

        $(this).data('todo', todo);

    } else {

        return $(this).data('todo');

    }

}

var container = $('container');

container.data('todo', todo);

var savedTodo = container.data('todo');


container.todo(todo);