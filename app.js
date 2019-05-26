var express      = require("express"),
methodOverride = require("method-override"),
bodyParser      = require("body-parser"),
mongoose        = require("mongoose"),
passport           = require("passport"),
LocalStrategy  = require("passport-local"),
Student            = require("./models/student.js"),
Result              = require("./models/result.js"),
Dmc                 = require("./models/dmc.js"),
User                 = require("./models/user.js"),
seedDB            = require("./seeds");
app                  = express();
const port        = 3002;

var studentRoutes =  require("./routes/students"),
      resultRoutes   =  require("./routes/result"),
      dmcRoutes   =  require("./routes/dmc"),
      indexRoutes   =  require("./routes/index");

      mongoose.set('useFindAndModify', false);

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

//routes
app.use(studentRoutes);
app.use(resultRoutes);
app.use(dmcRoutes);
app.use(indexRoutes);




//LISTEN PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))