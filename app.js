var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.lastId = 0;
    return TodoService;
}());
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Completed"] = 3] = "Completed";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
