
var express      = require("express");
var router         = express.Router();
var  Student      = require("../models/student.js");


//ROUTES

router.get("/", function(req, res){
    res.redirect("students");
});

router.get("/dashboard", function(req, res){

    Student.find({}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("dashboard",{students: students});
        }
  
    });

});

router.get("/students",isLoggedIn, function(req, res){
    console.log(req.user);
  Student.find({}, function(err, students){
      if (err){
          console.log("Error!")
      }
      else {
        res.render("students",{students: students});
      }

  });
});

   // cse

router.get("/students/cse", function(req, res){
    Student.find({branch: 'CSE'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});

//ece
router.get("/students/ece", function(req, res){
    Student.find({branch: 'ECE'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});

//me
router.get("/students/me", function(req, res){
    Student.find({branch: 'ME'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});

//ce

router.get("/students/ce", function(req, res){
    Student.find({branch: 'CE'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});

//me

router.get("/students/eee", function(req, res){
    Student.find({branch: 'EEE'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});





router.get("/students/new", isLoggedIn, function(req, res){
    res.render("students/new");
});



router.post("/students", isLoggedIn, function(req, res){
    Student.create(req.body.student, function(err, newStudent){
   if(err){
    res.render("students/new");
   }
   else{
    res.redirect("/students");
   }
    });

});
router.get("/students/:id/edit", isLoggedIn,function(req,res){
    Student.findById(req.params.id, function(err, student){
       if(err){
           res.redirect("/students");
       }else{
        res.render("students/edit", {student: student});
       }
    });
    
});

router.put("/students/:id", isLoggedIn,function(req,res){
    Student.findByIdAndUpdate(req.params.id, req.body.student,function(err, updatedStudent){
      if(err){
        res.redirect("/students");
      }
      else{
        res.redirect("/students");
      }
    });
});

router.delete("/students/:id", isLoggedIn,function(req,res){

    Student.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/students");
          }
          else{
            res.redirect("/students");
          }
    });
    
});


router.get("/students/:id/about",function(req,res){
  
    Student.findById(req.params.id, function(err, student){
        if(err){
            res.redirect("/students");
        }else{
         res.render("students/about", {student: student});
        }
     });
    
});

function isLoggedIn(req, res, next){
    if(req. isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;