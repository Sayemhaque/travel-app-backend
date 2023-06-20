const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const User  = mongoose.model("User" , userSchema);
module.exports = User;