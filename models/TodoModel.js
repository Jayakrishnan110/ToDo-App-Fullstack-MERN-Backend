const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    Text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema)