
var express      = require("express");
var router         = express.Router();
var  Student      = require("../models/student.js");
var  Result              = require("../models/result.js");

//show routes

router.get("/students/:id/result", function(req, res){
    Student.findById(req.params.id).populate("results").exec(function(err, foundStudent){
    if(err){
        res.redirect("/students");
        console.log(err);
    }
    else {
        console.log(foundStudent);
        res.render("results/index", {student: foundStudent});
    }
    });
});




//results routes

router.get("/students/:id/results/new", isLoggedIn,function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
        }
        else{
            res.render("results/new",{student: student});
        }
    });

});


router.post("/students/:id/results",isLoggedIn, function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
            res.redirect("/student");
        }
        else{
            Result.create(req.body.result, function(err, result){
                if(err){
                    console.log(err);
                } else{
                    student.results.push(result);
                    student.save();
                    res.redirect('/students/' + student._id + '/result')
                }
            }
           
        )};
    });

});



// edit routes

router.get("/results/:id/edit", isLoggedIn,function(req,res){
    Result.findById(req.params.id, function(err, student){
      if(err){
        res.redirect('/students');
       }else{
        res.render("results/edit", {student: student});
       }
    });
    
});

router.put("/results/:id", isLoggedIn,function(req,res){
    Result.findByIdAndUpdate(req.params.id, req.body.result,function(err, updatedStudent){
        console.log(updatedStudent);
      if(err){
        res.redirect('/students');
      }
      else{
        res.redirect('/students');
      }
    });
});



// delete routes

router.delete("/results/:id", isLoggedIn,function(req,res){
    console.log(req.params.id);
    Result.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/students/cse");
          }
          else{
            res.redirect("/students");
          }
    });
    
});


// is log in funtion

function isLoggedIn(req, res, next){
    if(req. isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;