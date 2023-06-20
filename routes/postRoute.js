const express = require("express");
const router = express.Router();
const Post = require("../models/postModel.js")




// get all the post 
router.get('/' , async (req,res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

//get posts by email 
router.get('/email' , async (req,res) => {
  try {
    const {email} = req.query;
    console.log(email)
    const posts = await Post.find({email})
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})


// post 
router.post('/' , async(req,res) => {
  try {
    const newPost = new Post({...req.body})
    //save post to db
    await newPost.save()
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }  
})


//update a post
router.put('/:id' , async(req,res) =>{
  try {
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(id,{...req.body},{ new: true })
    if(!updatedPost){
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})


//delete a post 
router.delete('/:id' , async(req,res) =>{
  try {
    const id = req.params.id;
    const deletePost = await Post.findByIdAndDelete(id)
    if(!deletePost){
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})








module.exports = router;