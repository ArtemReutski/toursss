var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('messages');

var service = {};

service.create = create;
service.getAll = getAll;
service.getMessagesbyStatus = getMessagesbyStatus;
service.changeStatus = changeStatus;
service.delete = _delete;

module.exports = service;

function create(message) {
    var deferred = Q.defer();
    db.messages.insert(message, function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve();
    });
    return deferred.promise;
}

function getMessagesbyStatus(qStatus) {
    var deferred = Q.defer();
    db.messages.find({ status: qStatus }).toArray(function (err, messages) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(messages);
    });
    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();
    db.messages.find().toArray(function (err, messages) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(messages);
    });
    return deferred.promise;
}

function changeStatus(_id, msgParam) {
    var deferred = Q.defer();
    var set = {
        status: msgParam.status,
    };
    db.messages.update(
        { _id: mongo.helper.toObjectID(_id) },
        { $set: set },
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();
    db.messages.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        });
    return deferred.promise;
}