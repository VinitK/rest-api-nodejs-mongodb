const mongoose = require('mongoose')

const Players = new mongoose.Schema({
    firstname: {type:String, default:''},
    lastname: {type:String, default:''},
    type: {type:String, default:''},
    age: {type:Number, default:0},
    team: {type:String, default:''}
})

module.exports = mongoose.model('Players', Players)