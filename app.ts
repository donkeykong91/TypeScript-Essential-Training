// class TodoService {

//     static lastId: number = 0;

//     constructor (private todos: Todo[]) {}

//     add(todo: Todo) {

//         var newId = TodoService.getNextId();

//     }

//     getAll() {

//         return this.todos;

//     }

//     static getNextId() {

//         return TodoService.lastId += 1;

//     }

// }

// interface Todo {

//     name: string;

//     state: TodoState;

// }

// enum TodoState {

//     New = 1,

//     Active,

//     Complete, 

//     Deleted

// }

// var todo = {

//     name: "Pick up drycleaning",

//     get state() {

//         return this._state;

//     },

//     set state(newState) {

//         if (newState == TodoState.Complete) {

//             var canBeCompleted = 
                
//                 this.state == TodoState.Active ||

//                 this.state == TodoState.Deleted;

//             if (!canBeCompleted) {

//                 throw "Todo must be Active or Deleted in order to be marked Completed";

//             }

//         }

//         this._state = newState;

//     }

// }

// class SmartTodo {

//     _state: TodoState;

//     name: string;

//     get state() {

//         return this._state;

//     }

//     set state(newState) {

//         if (newState == TodoState.Complete) {

//             var canBeCompleted = 
                
//                 this.state == TodoState.Active ||

//                 this.state == TodoState.Deleted;

//             if (!canBeCompleted) {

//                 throw "Todo must be Active or Deleted in order to be marked Completed";

//             }

//         }

//         this._state = newState;

//     }


//     constructor(name: string) {

//         this.name = name;

//     }

// }

// var todo = new SmartTodo("Pick up drycleaning");

// todo.state = TodoState.Complete; 

// todo.state; 

// abstract class TodoStateChanger {

//     constructor(protected newState: TodoState){}

//     abstract canChangeState(todo: Todo): boolean;

//     changeState(todo: Todo): Todo {

//         if (this.canChangeState(todo)) {

//             todo.state = this.newState;

//         }

//         return todo;

//     }

// }

// class CompleteTodoStateChanger extends TodoStateChanger {

//     constructor() {

//         super(TodoState.Complete);

//     }

//     canChangeState(todo: Todo): boolean {

//         return !!todo && (

//             todo.state == TodoState.Active ||

//             todo.state == TodoState.Deleted

//         );

//     }

// }

// function clone<T> (value: T): T {

//     let serialized = JSON.stringify(value);

//     return JSON.parse(serialized);

// }

// clone('Hello');

// clone(123);

// var todo: Todo = {

//     id: 1,

//     name: "Pick up drycleaning", 

//     state: TodoState.Active

// };

// clone(todo);


// clone({ name: "Jess" });

// var array: number[] = [1, 2, 3]

// var array2: Array<number> = [1, 2, 3]

// class KeyValuePair<TKey, TValue> {

//     constructor(

//         public key: TKey,

//         public value: TValue

//     ) {}

// }

// let pair1 = new KeyValuePair<number, string>(1, 'First');

// let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));

// let pair3 = new KeyValuePair<number, string>(3, 'Third');


// class KeyValuePairPrinter<T, U> {

//     constructor(private pairs: KeyValuePair<T, U>[]) {}

//     print() {

//         for (let p of this.pairs) {

//             console.log(`${p.key}: ${p.value}`);

//         }

//     }   

// }

// var printer = new KeyValuePairPrinter([pair1, pair3]);

// printer.print();

// interface IHaveALength {

//     length: number;

// }

// function totalLength<T extends IHaveALength>(x: T, y: T) {

//     var total: number = x.length + y.length;

//     return total;

// }

// class CustomArray<T> extends Array<T> {}

// var length = totalLength([1, 2, 3], new CustomArray<number>());

// namespace TodoApp.Model {

//     export interface Todo {

//         name: string;

//         state: TodoState;

//     }

// }

// namespace TodoApp.Model {

//     export enum TodoState {

//         New = 1,

//         Active,

//         Complete,

//         Deleted

//     }

// }

// namespace DataAccess {

//     import Model = TodoApp.Model;

//     import Todo = Model.Todo;

//     export interface ITodoService {

//         add(todo: Todo): Todo;

//         delete(todoId: number): void;

//         getAll(): Todo[];

//         getById(todoId: number): Todo;

//     }

// }

// var jQuery = {

//     version: 1.19,

//     fn: {}

// };

// (function defineType($) {

//     if ( $.version < 1.15 ) {

//         throw "Plugin requires jQuery version 1.15+"

//     }

//     $.fn.myPlugin = function() {

//         // my plugin code

//     }

// })(jQuery)

import { Todo as TodoTask, TodoState } from './model';

import { TodoService } from './DataAccess';


{let service = new TodoService([]);

    service.add(

        {
            id: 1,

            name: 'Pick up drycleaning',

            state: TodoState.New
        }

    );

    {let todos = service.getAll();

        todos.forEach(function(todo) {

            console.log(`${todo.name} [${TodoState[todo.state]}]`);

        });

    }

}