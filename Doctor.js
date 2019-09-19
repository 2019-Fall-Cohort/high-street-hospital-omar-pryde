const Employees = require("./Employees");
const input = require("./readline-sync");

class Doctor extends Employees{
constructor(){
    super();
    this.salary = 90000
    this.specialtyArray = ["Radiology", "Cardiology","Medicine", "Family", "Nerology", "Psychiatry" ];
}

getSpecialty(){
let specialtyArea = this.specialtyArray;
if (specialtyArea= "Radiology"){
    return this.specialtyArray[1];
}
if (specialtyArea= "Cardiology"){
    return this.specialtyArray[2];
}
if (specialtyArea= "Medicine"){
    return this.specialtyArray[3];
}
if (specialtyArea= "Family"){
    return this.specialtyArray[4];
}
if (specialtyArea= "Nerology"){
    return this.specialtyArray[5];
}
if (specialtyArea= "Psychiatry"){
    return this.specialtyArray[6];
}
else Console.log("Input is Invald!!; Try Agian! ")


}}
module.exports = Doctor;