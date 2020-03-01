const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    info: String,
    count: Number,
});

module.exports = mongoose.model('task', taskSchema);