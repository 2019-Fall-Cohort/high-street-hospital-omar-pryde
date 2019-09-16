const Employees = require("./Employees");

class Receptionist extends Employees{
    constructor(){
        super();
        this.salary = 45000;
        this.work;
    }
    getWorking(){
        if(this.work=== true){
            return "The receptionist is on the phone. "
        }
        else{
            return "Not currently on the phone. "
            }
     } 
}
module.exports = Receptionist; 