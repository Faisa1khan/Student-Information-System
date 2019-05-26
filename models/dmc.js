var mongoose = require("mongoose");
var dmcSchema = new mongoose.Schema({
    sem: String,
    dmc_no: String,
    roll_no: String,
    taken: String,
});

module.exports =  mongoose.model("Dmc", dmcSchema);