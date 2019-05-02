var mongoose  = require("mongoose"),
Student            = require("./models/student"),
Result               = require("./models/result");



var data = [
    {
           regn_no: "15CSE001",
           name: "Chaman",
           branch: "CSE",
           DMC: "Yes", 
    },
    {
        regn_no: "15CSE002",
           name: "Faisal",
           branch: "CSE",
           DMC: "No", 
    },
    {
        regn_no: "15CSE003",
        name: "Sanaullah",
        branch: "CSE",
        DMC: "Yes", 
    },
    {
        regn_no: "15CSE004",
        name: "Sohit",
        branch: "CSE",
        DMC: "Yes", 
    },

    {
        regn_no: "15CSE005",
        name: "Touhid Alvi",
        branch: "CSE",
        DMC: "Yes", 
    },

    {
        regn_no: "15ECE001",
        name: "Alvi",
        branch: "ECE",
        DMC: "Yes", 
    },

    {
        regn_no: "15ECE002",
        name: "Karan",
        branch: "ECE",
        DMC: "Yes", 
    },

    {
        regn_no: "15ECE003",
        name: "Kumar",
        branch: "ECE",
        DMC: "Yes", 
    },

    {
        regn_no: "15ECE004",
        name: "Ahmed",
        branch: "ECE",
        DMC: "Yes", 
    },

    {
        regn_no: "15ME001",
        name: "Abhishek",
        branch: "ME",
        DMC: "Yes", 
    },
    {
        regn_no: "15ME002",
        name: "Pawan",
        branch: "ME",
        DMC: "Yes", 
    },
    {
        regn_no: "15ME003",
        name: "Sagar",
        branch: "ME",
        DMC: "Yes", 
    },
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
                        regn_no: "3020461",
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
