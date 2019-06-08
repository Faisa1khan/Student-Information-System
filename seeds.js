var mongoose  = require("mongoose"),
Student            = require("./models/student"),
Result               = require("./models/result");
Dmc              = require("./models/dmc");



var data = [
    
      {
          "regn_no": 3838066,
          "name": "Luella",
          "father_n": "Stacey",
          "mother_n": "Rosemarie",
          "city": "Hiko",
          "branch": "ME",
          "batch": 2014
        },
        {
          "regn_no": 3624895,
          "name": "Simpson",
          "father_n": "Steele",
          "mother_n": "Campbell",
          "city": "Joppa",
          "branch": "CE",
          "batch": 2016
        },
        {
          "regn_no": 2399180,
          "name": "Orr",
          "father_n": "Lara",
          "mother_n": "Judy",
          "city": "Stagecoach",
          "branch": "EEE",
          "batch": 2010
        },
        {
          "regn_no": 3137677,
          "name": "Lorna",
          "father_n": "Edwina",
          "mother_n": "Lavonne",
          "city": "Delco",
          "branch": "CE",
          "batch": 2014
        },
        {
          "regn_no": 3812215,
          "name": "Spears",
          "father_n": "Connie",
          "mother_n": "Debora",
          "city": "Guilford",
          "branch": "ME",
          "batch": 2010
        },
        {
          "regn_no": 3458666,
          "name": "Cunningham",
          "father_n": "Christie",
          "mother_n": "Betty",
          "city": "Jessie",
          "branch": "ECE",
          "batch": 2013
        },
        {
          "regn_no": 3829537,
          "name": "Tracey",
          "father_n": "Serrano",
          "mother_n": "Maricela",
          "city": "Idledale",
          "branch": "ECE",
          "batch": 2011
        },
        {
          "regn_no": 2669597,
          "name": "Cooley",
          "father_n": "Jerry",
          "mother_n": "Figueroa",
          "city": "Ferney",
          "branch": "CSE",
          "batch": 2015
        },
        {
          "regn_no": 2732756,
          "name": "Lindsey",
          "father_n": "Norton",
          "mother_n": "Lynch",
          "city": "Nanafalia",
          "branch": "EEE",
          "batch": 2014
        },
        {
          "regn_no": 3766170,
          "name": "Hinton",
          "father_n": "Berg",
          "mother_n": "Rosa",
          "city": "Chelsea",
          "branch": "CSE",
          "batch": 2013
        },
        {
          "regn_no": 3507073,
          "name": "Renee",
          "father_n": "Rivera",
          "mother_n": "Walls",
          "city": "Loma",
          "branch": "ME",
          "batch": 2015
        },
        {
          "regn_no": 3821031,
          "name": "Dena",
          "father_n": "Valdez",
          "mother_n": "Luna",
          "city": "Dunbar",
          "branch": "EEE",
          "batch": 2013
        },
        {
          "regn_no": 3294584,
          "name": "Rowe",
          "father_n": "Nadine",
          "mother_n": "Lawrence",
          "city": "Frizzleburg",
          "branch": "EEE",
          "batch": 2012
        },
        {
          "regn_no": 2258539,
          "name": "Hardy",
          "father_n": "Constance",
          "mother_n": "Goodman",
          "city": "Bluffview",
          "branch": "EEE",
          "batch": 2010
        },
        {
          "regn_no": 2159415,
          "name": "Verna",
          "father_n": "Alvarez",
          "mother_n": "Russo",
          "city": "Bourg",
          "branch": "ECE",
          "batch": 2015
        },
        {
          "regn_no": 2557641,
          "name": "Chris",
          "father_n": "Britt",
          "mother_n": "Sanford",
          "city": "Sheatown",
          "branch": "ME",
          "batch": 2016
        },
        {
          "regn_no": 2820858,
          "name": "Day",
          "father_n": "Moran",
          "mother_n": "Richard",
          "city": "Dixie",
          "branch": "ME",
          "batch": 2012
        },
        {
          "regn_no": 3807973,
          "name": "Logan",
          "father_n": "Talley",
          "mother_n": "Estelle",
          "city": "Fannett",
          "branch": "CSE",
          "batch": 2016
        },
        {
          "regn_no": 3532414,
          "name": "Banks",
          "father_n": "Patel",
          "mother_n": "Gardner",
          "city": "Nord",
          "branch": "CE",
          "batch": 2016
        },
        {
          "regn_no": 2634650,
          "name": "Effie",
          "father_n": "Lyons",
          "mother_n": "Scott",
          "city": "Barronett",
          "branch": "ME",
          "batch": 2010
        },
        {
          "regn_no": 2528035,
          "name": "Jannie",
          "father_n": "Corina",
          "mother_n": "Walsh",
          "city": "Leming",
          "branch": "EEE",
          "batch": 2015
        },
        {
          "regn_no": 2134580,
          "name": "Carolyn",
          "father_n": "Mcneil",
          "mother_n": "Mcclain",
          "city": "Crawfordsville",
          "branch": "EEE",
          "batch": 2012
        },
        {
          "regn_no": 3943704,
          "name": "Page",
          "father_n": "Nina",
          "mother_n": "Robinson",
          "city": "Levant",
          "branch": "ECE",
          "batch": 2010
        },
        {
          "regn_no": 3723285,
          "name": "Coleman",
          "father_n": "Benton",
          "mother_n": "Mitzi",
          "city": "Waterview",
          "branch": "ME",
          "batch": 2012
        },
        {
          "regn_no": 2491935,
          "name": "Hull",
          "father_n": "Odom",
          "mother_n": "Wilma",
          "city": "Riceville",
          "branch": "ME",
          "batch": 2010
        },
        {
          "regn_no": 3933366,
          "name": "Jenna",
          "father_n": "Duncan",
          "mother_n": "Josefa",
          "city": "Neahkahnie",
          "branch": "ME",
          "batch": 2015
        },
        {
          "regn_no": 3278550,
          "name": "Patrick",
          "father_n": "Salas",
          "mother_n": "Natalia",
          "city": "Matthews",
          "branch": "ME",
          "batch": 2016
        },
        {
          "regn_no": 3581178,
          "name": "Brittany",
          "father_n": "Alexander",
          "mother_n": "Tricia",
          "city": "Herlong",
          "branch": "CSE",
          "batch": 2012
        },
        {
          "regn_no": 3965637,
          "name": "Fuller",
          "father_n": "Justice",
          "mother_n": "Rena",
          "city": "Gambrills",
          "branch": "CE",
          "batch": 2015
        },
        {
          "regn_no": 3449279,
          "name": "Vargas",
          "father_n": "Camille",
          "mother_n": "Maude",
          "city": "Sabillasville",
          "branch": "CE",
          "batch": 2015
        },
        {
          "regn_no": 3550800,
          "name": "Cathleen",
          "father_n": "Dolores",
          "mother_n": "Cindy",
          "city": "Gulf",
          "branch": "ME",
          "batch": 2015
        },
        {
          "regn_no": 2567676,
          "name": "Cantrell",
          "father_n": "Callie",
          "mother_n": "Aileen",
          "city": "Chestnut",
          "branch": "CSE",
          "batch": 2015
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
                        regn_no: "3020461",
                        total_marks: "1000",
                        max_marks: "1200",
                        reappear: "0",
                        dmc_taken: "No"      
                                     
                    },
                     function(err, result){
                      console.log(result);
                        if(err){
                            console.log(err);
                        } else {
                         
                                student.results.push(result);
                                student.save();
                                console.log("ADDED RESULT");
                        }
                    });

                    
             }
            });
         });
    

     });
   
     
 }
 module.exports = seedDB;
