const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const taskSchema = new mongoose.Schema(
    {  
        type: String,        
        title: String,
        description: String,        
        suburb: String,
        date: Date,
        rate: String,
        amount: String
    }
)

taskSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Tasks", taskSchema);