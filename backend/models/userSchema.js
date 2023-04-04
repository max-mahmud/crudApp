const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:String,
        require:true
    }
})

const user = mongoose.model('cduser', userSchema)
module.exports = user;