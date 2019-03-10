// MONGOOSE CONFIG

var mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
    roll_no: String,
    name: String,
    branch: String,
    DMC: String, 
    image: String,
    created:  {type: Date, default: Date.now}
});

module.exports =  mongoose.model("student", studentSchema);