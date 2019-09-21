const Employees = require("./Employees");
const Patient = require("./Patient"); 

class Nurse extends Employees{
    constructor(){
        // super();
        this.salary= 50000;
        this.collectionOfPatients = collectionOfPatients;
        this.caresForPatients = true;

    }

    getCollectionOfPatients(){
        collectionOfPatients = 10
    }
}
module.exports = Nurse;
