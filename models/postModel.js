const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
   title:{
    type:String,
    require:true
   },
   author:{
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
   location:{
    type:String,
    require:true
   },
   rating:{
    type:Number,
    require:true
   },
   details:{
    type:String,
    require:true
   },
   category:{
    type:String,
    require:true
   },
    createdAt: {
    type: Date,
    default: Date.now
  }
})


const Post = mongoose.model("Post" , postSchema)

module.exports = Post