function TodoService() {

}

TodoService.lastId = 0;

TodoService.getNextId = function() {

    return TodoService.lastId += 1;

}

TodoService.prototype.add = function (todo) {

    var newId = TodoService.getNextId;

}