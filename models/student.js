// MONGOOSE CONFIG

var mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
    roll_no: String,
    name: String,
    branch: String,
    DMC: String, 
    image: String,
    created:  {type: Date, default: Date.now},
    results: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Result"
        }
     ]
});

module.exports =  mongoose.model("Student", studentSchema);