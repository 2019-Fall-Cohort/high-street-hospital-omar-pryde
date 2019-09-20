const Employees = require("./Employees");
const input = require("./readline-sync");

class Doctor extends Employees{
    constructor(){
        super();
        this.salary = 90000
        this.specialty = getSpecialty();
        this.caresForPatients = true;
        
    }
    getSpecialty(){

        specialtyArray = ["Radiology", "Cardiology","Medicine", "Family", "Neurology", "Psychiatry" ];
        switch (Math.floor(6 * Math.random())) {

            case "0": return specialtyArray[0];
            break;

            case "1": return specialtyArray[1];
            break;

            case "2": return specialtyArray[2];
            break;

            case "3": return specialtyArray[3];
            break;

            case "4": return specialtyArray[4];
            break;

            case "5": return specialtyArray[5];
            break;

            default: return "Gyneacology";
            break;
            
        }
    }
}

module.exports = Doctor;