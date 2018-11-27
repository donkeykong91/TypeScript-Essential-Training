var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Completed"] = 3] = "Completed";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: 'Pick up drycleaning',
    state: TodoState.New
};
function () { }
delete (todo);
Todo;
{
    if (todo.state != TodoState.Completed) {
        throw "Can't delete incomplete task!";
    }
}
