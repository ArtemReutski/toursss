var config = require('config.json');
var express = require('express');
var router = express.Router();
var messageService = require('services/message.service');

// routes
router.post('/create-message', sendMessage);
router.get('/get-all-messages', getAll);
router.get('/:status', getMessagesbyStatus);
router.put('/:_id', changeStatus);
router.delete('/:_id', _delete);
module.exports = router;

function sendMessage(req, res) {
    messageService.create(req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    messageService.getAll()
        .then(function (messages) {
            res.send(messages);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getMessagesbyStatus(req,res) {
    messageService.getMessagesbyStatus(req.params.status)
        .then(function (messages) {
            res.send(messages);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function changeStatus(req, res) {
    messageService.changeStatus(req.params._id, req.body)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    messageService.delete(req.params._id)
        .then(function () {
            res.json('success');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}