const Employees = require("./Employees");
const Doctor = require("./Doctor");

class Surgeon extends Doctor{
    constructor(){ 
        super();
        this.salary = 120000;
        this.SurgicalSpecialty = getSurgicalSpecialty();
        this.caresForPatients = true;
    }

    getSurgicalSpecialty(){

        specialtyArray = ["Anesthesiology", "Cardiology","Osteopathy", "Gastro-intestinal", "Neurology", "Respiratory" ];
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

            default: return "General Surgeon";
            break;
            
        }
    }
}
module.export = Surgeon;