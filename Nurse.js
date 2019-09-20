const Employees = require("./Employees");
const Patient = require("./Patient"); 

class Nurse extends Employees{
    constructor(name, idNum, collectionOfPatientsSize = 10){
        super(name, idNum, "Nurse", 50000, true);
        this.collectionOfPatients = [collectionOfPatientsSize];
        this.collectionOfPatientsSize = collectionOfPatientsSize;
        //this.collectionOfPatients = getCollectionOfPatients();

    }

    // getCollectionOfPatients(){}
}
module.exports = Nurse;