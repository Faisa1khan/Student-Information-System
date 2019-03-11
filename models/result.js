var mongoose = require("mongoose");
var resultSchema = new mongoose.Schema({
    sem: String,
    dmc_no: String,
    regn_no:String,
    roll_no: String,
    total_marks: String,
    max_marks: String,
    reappear: String,
});

module.exports =  mongoose.model("Result", resultSchema);