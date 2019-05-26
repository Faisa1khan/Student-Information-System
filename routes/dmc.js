var express      = require("express");
var router         = express.Router();
var  Student      = require("../models/student.js");
var  Result              = require("../models/dmc.js");

router.get("/students/:id/dmc", function(req, res){
    Student.findById(req.params.id).populate("dmc").exec(function(err, foundStudent){
    if(err){
        res.redirect("/students");
        console.log(err);
    }
    else {
        console.log(foundStudent);
        res.render("dmc/index", {student: foundStudent});
    }
    });
});



//results routes

router.get("/students/:id/dmc/new", function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
        }
        else{
            res.render("dmc/new",{student: student});
        }
    });

});


router.post("/students/:id/dmc",function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
            res.redirect("/student");
        }
        else{
            console.log(req.body.result);
            Result.create(req.body.result, function(err, dmc){
                if(err){
                    console.log(err);
                } else{
                    console.log(dmc);
                    student.dmc.push(dmc);
                    student.save();
                    res.redirect('/students/' + student._id + '/dmc')
                }
            }
           
        )};
    });

});

function isLoggedIn(req, res, next){
    if(req. isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}


module.exports = router;