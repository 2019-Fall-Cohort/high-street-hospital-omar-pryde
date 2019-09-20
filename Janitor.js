const Employees = require("./Employees");
class Janitor extends Employees{
    constructor()
    {
        super();
        this.work;
        this.salary = 40000;
        this.caresForPatients = false;
        this.isSweeping = getRandomBoolean();
    }
    getGwop(){
        return salary;
    }
    getCleaning(){
        if(this.work === true){
            return "Is wroking hard... sweeping. "
        }
        else{
            return "They must be off today, no one is sweeping! "
            }
     }
    getRandomBoolean() {
        if(Math.random() > .5){return true;}
        else {return false;}
    }
}
module.exports = Janitor;