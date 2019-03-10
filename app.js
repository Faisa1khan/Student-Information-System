var express      = require("express"),

bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
Student            = require("./models/student.js"),
app                  = express();
const port        = 3002;



//APP CONFIG
mongoose.connect("mongodb://localhost/examination_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


//ROUTES

app.get("/", function(req, res){
    res.render("index");
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
    res.render("new");
});

app.post("/students", function(req, res){
    Student.create(req.body.student, function(err, newStudent){
   if(err){
    res.render("new");
   }
   else{
       console.log(req.body.student);
    res.redirect("/students");
   }
    });

});

//show routes

app.get("/students/:id", function(req, res){
    Student.findById(req.params.id, function(err, foundStudent){
    if(err){
        res.redirect("/students");
        console.log(err);
    }
    else {
        res.render("show", {student: foundStudent});
    }
    })
});





//LISTEN PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))