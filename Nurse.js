const Employees = require("./Employees");
const Patient = require("./Patient"); 

class Nurse extends Employees{
    constructor(){
        // super();
        this.salary= 50000;
        this.collectionOfPatients = [10];
        this.caresForPatients = true;

    }
}
module.exports = Nurse;