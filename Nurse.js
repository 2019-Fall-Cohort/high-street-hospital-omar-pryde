const Employees = require("./Employees");
// const Patient = require("./Patient"); 
class Nurse extends Employees{
    constructor(){
        super();
        this.salary= 50000;
    }
        drawBlood(){

        }
        careForPatient(){
            
        }
}
    module.exports = Nurse;