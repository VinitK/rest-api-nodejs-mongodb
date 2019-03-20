const mongoose = require('mongoose')

const Teams = new mongoose.Schema({
    name: {type:String, default:''},
    city: {type:String, default:''},
    won: {type:Number, default:0}
})

module.exports = mongoose.model('Teams', Teams)