var express      = require("express"),

bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
Student            = require("./models/student.js"),
Result            = require("./models/result.js"),
seedDB             = require("./seeds");
app                  = express();
const port        = 3002;



//APP CONFIG
mongoose.connect("mongodb://localhost/examination_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

seedDB();

//ROUTES

app.get("/", function(req, res){
    res.render("students/index");
});

app.get("/students", function(req, res){
  Student.find({}, function(err, students){
      if (err){
          console.log("Error!")
      }
      else {
        res.render("students",{students: students});
      }

  });

   
});

app.get("/students/new", function(req, res){
    res.render("students/new");
});

app.post("/students", function(req, res){
    Student.create(req.body.student, function(err, newStudent){
   if(err){
    res.render("students/new");
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

app.get("/students/:id/results/new", function(req, res){
    Student.findById(req.params.id, function(err, student){
        if(err){
            console.log(err);
        }
        else{
            res.render("results/new",{student: student});
        }
    });

});


app.post("/students/:id/results", function(req, res){
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






//LISTEN PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))