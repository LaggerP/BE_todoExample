const express = require('express');
const api = express.Router();
const taskController = require('../controller/taskController');

api.get('/', taskController.getAll);
api.post('/addTask', taskController.addTask);

module.exports = api;
