var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('todos');

var service = {};

service.getAllLists = getAllLists;
service.getListById = getListById;
service.createList = createList;
service.createTask = createTask;
service.updateList = updateList;
service.deleteTask = _deleteTask;
service.deleteList = _deleteList;

module.exports = service;

function getAllLists() {
    var deferred = Q.defer();
    db.todos.find().toArray(function (err, lists) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(lists);
    });
    return deferred.promise;
}

function getListById(_id) {
    var deferred = Q.defer();
    db.todos.findById(_id, function (err, list) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(list);
    });
    return deferred.promise;
}

function createList(todoList) {
    var deferred = Q.defer();
    db.todos.findOne(
        { listTitle: todoList.listTitle },
        function (err, list) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            if (list) {
                // listTitle already exists
                deferred.reject('This "' + todoList.listTitle + '" list was created');
            } else {
                createList();
            }
        });

    function createList() {
        db.todos.insert(todoList, function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    }
    return deferred.promise;
}

function createTask(listTitle, task) {
    var deferred = Q.defer();
    db.todos.update({ listTitle: listTitle }, { $addToSet: { 'tasks': task } }, function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve();
    });
    return deferred.promise;
}

function updateList(_id, list) {
    var deferred = Q.defer();
    db.todos.update(
        { _id: mongo.helper.toObjectID(_id) },
        { $set: list },
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    return deferred.promise;
}

function _deleteTask(listTitle, task) {
    var deferred = Q.defer();
    db.todos.update({ listTitle: listTitle }, { $pull: { 'tasks': task } }, function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve();
    });
    return deferred.promise;
}

function _deleteList(_id) {
    var deferred = Q.defer();
    db.todos.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    return deferred.promise;
}