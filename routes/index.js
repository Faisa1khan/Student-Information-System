
var express      = require("express");
var router         = express.Router();
var passport     = require("passport");
var User           = require("../models/user.js");

// resgister logic
router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", function(req, res){
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
router.get("/login", function(req, res){
    res.render("login");
});

// login logic
router.post("/login", passport.authenticate("local",
{
       successRedirect: "/dashboard",
       failureRedirect: "login"
}), function(req, res){

});

//logout logic

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/dashboard")
});

function isLoggedIn(req, res, next){
    if(req. isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;