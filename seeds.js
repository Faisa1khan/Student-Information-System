var mongoose  = require("mongoose"),
Student            = require("./models/student"),
Result               = require("./models/result");



var data = [
    {
           roll_no: "15CSE001",
           name: "Chaman",
           branch: "CSE",
           DMC: "Yes", 
    },
    {
        roll_no: "15CSE002",
           name: "Faisal",
           branch: "CSE",
           DMC: "No", 
    },
    {
        roll_no: "15CSE003",
        name: "Sanaullah",
        branch: "CSE",
        DMC: "Yes", 
    },
    {
        roll_no: "15CSE004",
        name: "Sohit",
        branch: "CSE",
        DMC: "Yes", 
    },

    {
        roll_no: "15CSE005",
        name: "Touhid Alvi",
        branch: "CSE",
        DMC: "Yes", 
    }
]
  
 function seedDB(){
  
    Student.remove({}, function(err){
        if(err){
            console.log(err);
        }
          console.log('removed students');
          data.forEach(function(seed){
            Student.create(seed, function(err, student){
             if(err){
                 console.log(err);
             } else {
                console.log("added a student");
                Result.create(
                    {
                        sem: "1",
                        dmc_no:"30223535",
                        regn_no: "152003003",
                        roll_no: "3020461",
                        total_marks: "1000",
                        max_marks: "1200",
                        reappear: "0"        
                                     
                    }, function(err, result){
                        if(err){
                            console.log(err);
                        } else {
                                student.results.push(result);
                                student.save();
                                console.log("Created new comment");
                        }
                    });
             }
            });
         });
     });
   
     
 }
 module.exports = seedDB;
