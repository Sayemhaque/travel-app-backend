const express = require("express");
const router = express.Router();
const User = require("../models/userModel")



//get all the users
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("Internal server error")
    }
})
router.post("/", async (req, res) => {
    try {
        const newUser = new User({ ...req.body })
        await newUser.save()
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json("Internal server error")
    }
})

//delte user
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id)
        if (!deleteUser) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json("Internal server error")
    }
})

module.exports = router;