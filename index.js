const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config();
const PORT = process.env.PORT = 3000;
const connectToDb = require("./db/db.js")
const postRoute = require("./routes/postRoute.js")


// middleware
app.use(express.json()) 
app.use(cors())


//database connection
connectToDb()
  .then(() => {
    console.log("connect to database")
  })
  .catch((error) => {
    console.log(error);
  });
  

// routes
  app.get("/" , (req,res) => {
    res.send("i am running")
  })
  
  app.use("/posts", postRoute)


  app.listen(PORT, () => {
    console.log("app is running")
  })