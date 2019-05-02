var express      = require("express"),
methodOverride = require("method-override"),
bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
passport           = require("passport"),
LocalStrategy  = require("passport-local"),
Student            = require("./models/student.js"),
Result              = require("./models/result.js"),
User                 = require("./models/user.js"),
seedDB            = require("./seeds");
app                  = express();
const port        = 3002;


//passport configuration

app.use(require("express-session")({
    secret:  "My IGN name is  Hopino",
    resave: false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

//APP CONFIG
mongoose.connect("mongodb://localhost/examination_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
seedDB();

//ROUTES

app.get("/", function(req, res){
    res.redirect("students");
});

app.get("/dashboard", function(req, res){
    res.render("dashboard");
});

app.get("/students", function(req, res){
    console.log(req.user);
  Student.find({}, function(err, students){
      if (err){
          console.log("Error!")
      }
      else {
        res.render("students",{students: students});
      }

  });

   // cse
});
app.get("/students/cse", function(req, res){
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
app.get("/students/ece", function(req, res){
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
app.get("/students/me", function(req, res){
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

app.get("/students/ce", function(req, res){
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

app.get("/students/eee", function(req, res){
    Student.find({branch: 'EEE'}, function(err, students){
        if (err){
            console.log("Error!")
        }
        else {
          res.render("students",{students: students});
        }
    });
});





app.get("/students/new", isLoggedIn, function(req, res){
    res.render("students/new");
});

app.get("/students/eca",function(req, res){
    res.render("students/ece");
});

app.post("/students", isLoggedIn, function(req, res){
    Student.create(req.body.student, function(err, newStudent){
   if(err){
    res.render("students/new");
   }
   else{
    res.redirect("/students");
   }
    });

});
app.get("/students/:id/edit", isLoggedIn,function(req,res){
    Student.findById(req.params.id, function(err, student){
       if(err){
           res.redirect("/students");
       }else{
        res.render("students/edit", {student: student});
       }
    });
    
});

app.put("/students/:id", isLoggedIn,function(req,res){
    Student.findByIdAndUpdate(req.params.id, req.body.student,function(err, updatedStudent){
      if(err){
        res.redirect("/students");
      }
      else{
        res.redirect("/students");
      }
    });
});

app.delete("/students/:id", isLoggedIn,function(req,res){

    Student.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/students");
          }
          else{
            res.redirect("/students");
          }
    });
    
});


//show routes

app.get("/students/:id", function(req, res){
    Student.findById(req.params.id).populate("results").exec(function(err, foundStudent){
    if(err){
        res.redirect("/students");
        console.log(err);
    }
    else {
        console.log(foundStudent);
        res.render("students/show", {student: foundStudent});
    }
    });
});




//results routes

app.get("/students/:id/results/new", isLoggedIn,function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
        }
        else{
            res.render("results/new",{student: student});
        }
    });

});


app.post("/students/:id/results",isLoggedIn, function(req, res){
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
                    res.redirect('/students/' + student._id)
                }
            }
           
        )};
    });

});
// resgister logic
app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");

        }

        passport.authenticate("local")(req, res, function(){
              res.redirect("/students");
        });
    });
});

// login
app.get("/login", function(req, res){
    res.render("login");
});

// login logic
app.post("/login", passport.authenticate("local",
{
       successRedirect: "/students",
       failureRedirect: "login"
}), function(req, res){

});

//logout logic

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/students")
});

function isLoggedIn(req, res, next){
    if(req. isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}


//LISTEN PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))