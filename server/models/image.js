const mongoose = require ("mongoose");

const imageSchema = mongoose.Schema({  
  myImage: String,
});

module.exports = mongoose.model("Image", imageSchema);