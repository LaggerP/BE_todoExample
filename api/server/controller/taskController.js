const mongoose =  require('mongoose');
const taskModel = require('../models/task');

const getAll = async (req, res) => {
    taskModel.find({}, (err, task) => {
        res.send({ tasks: task })
    });
}
const addTask = async (req, res) => {
    const newTask = new taskModel({
        info: req.body.taskInfo.task,
        count: req.body.taskInfo.count,
    });
    taskModel.create(newTask, (err, data) => {
        if (err) console.log("error");
        else console.log(`task: ${data} created`); res.send();
    })
};

module.exports = {
    getAll,
    addTask,
}