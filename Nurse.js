const Employees = require("./Employees");
<<<<<<< HEAD
// const Patient = require("./Patient"); 
=======
const Patient = require("./Patient"); 

>>>>>>> c3de0bc6cc1954ddcebdb7c5f1aa7d0d27935b96
class Nurse extends Employees{
    constructor(){
        // super();
        this.salary= 50000;
<<<<<<< HEAD
    }
        drawBlood(){

        }
        careForPatient(){
            
        }
}
    module.exports = Nurse;
=======
        this.collectionOfPatients = [10];
        this.caresForPatients = true;

    }
}
module.exports = Nurse;
>>>>>>> c3de0bc6cc1954ddcebdb7c5f1aa7d0d27935b96
