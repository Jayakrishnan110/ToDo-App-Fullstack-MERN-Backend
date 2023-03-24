const TodoModel = require('../models/TodoModel')

module.exports.getToDo = async (req,res) => {
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req,res) => {

    const { Text } = req.body

    TodoModel
    .create({Text})
    .then((data) => {
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateTodo = async (req,res) => {
    const {_id, Text} = req.body
    TodoModel
    .findByIdAndUpdate(_id, {Text})
    .then(()=> res.send("Updated successfully"))
    .catch((err)=> console.log(err))
}

module.exports.deleteTodo = async (req,res) => {
    const {_id} = req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted successfully"))
    .catch((err)=> console.log(err))
}