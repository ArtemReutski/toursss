var config = require('config.json');
var express = require('express');
var router = express.Router();
var todoService = require('services/todo.service');

// routes
router.get('/', getAllLists);
router.get('/:_id', getListById);
router.post('/create-list', createList);
router.post('/:listTitle/create-task', createTask);
router.post('/:listTitle/delete-task', _deleteTask);
router.put('/:_id', updateList);
router.delete('/:_id', _deleteList);

module.exports = router;

function getAllLists(req, res) {
    todoService.getAllLists()
        .then(function (lists) {
            res.send(lists);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getListById(req, res) {
    todoService.getListById(req.params._id)
        .then(function (list) {
            if (list) {
                res.send(list);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function createList(req, res) {
    todoService.createList(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function createTask(req, res) {
    todoService.createTask(req.params.listTitle, req.body.tasks)
        .then(function () {
            res.json(req);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _deleteTask(req, res) {
    todoService.deleteTask(req.params.listTitle, req.body.tasks)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function updateList(req, res) {
    todoService.updateList(req.params._id, req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _deleteList(req, res) {
    todoService.deleteList(req.params._id)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

