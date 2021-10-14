const express = require ("express");
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require ("mongoose");
const cors = require ("cors");
const validator = require("validator");
const expressValidator = require('express-validator');
const {body, check, checkSchema, validationResult} = require('express-validator');
const { join } = require("path");
const Task = require('./models/Tasks.js');
const Image = require ("./models/image.js");

const app = express();
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());

//mongoose
mongoose.connect('mongodb://localhost:27017/iServiceDB', {useNewUrlParser:true, useUnifiedTopology: true});

//routes
//1. Retrieving, adding and removing ALL tasks
app.route('/newtask')
.post((req, res) => {
  
  const task = new Task({
      type: req.body.task_type,        
      title: req.body.task_title,
      description: req.body.task_description,        
      suburb: req.body.task_suburb,
      date: req.body.task_date,
      rate: req.body.task_rate,
      amount: req.body.task_amount
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('New Task Saved!'))
})

//image uploads route
app.use("/uploads", async (req, res, next) => {
  const body = req.body;
  try {
    const newImage = await Image.create(body);
    newImage.save();
    res.status(201).json({message: "new image uploaded", createdPost: newImage});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

app.route('/findtask')
.get((req, res) => {
  Task.find()
  .then(tasklist => res.json(tasklist))  
})

app.route('/delete')
.delete((req, res, next) => {
  Task.deleteOne(req.params.id, (error, data) => {
    if(error)
    {
      return next(error);
    }
    else
    {      
      res.status(200).json('Task Successfully Deleted!')        
    }
  })
})

//port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 8080;
}

app.listen(port, (req, res) =>{
    console.log("Server is running on port " + port + "!");
})