// MONGOOSE CONFIG

var mongoose = require("mongoose");
var studentSchema = new mongoose.Schema({
    regn_no: String,
    name: String,
    branch: String,
    DMC: String, 
    batch: Number,
    image: String,
    created:  {type: Date, default: Date.now},
    dmc: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Dmc"
        }
     ],

    results: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Result"
        }
     ],
    
});

module.exports =  mongoose.model("Student", studentSchema);