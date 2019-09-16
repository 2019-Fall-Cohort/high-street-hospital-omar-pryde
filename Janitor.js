const Employees = require("./Employees");
class Janitor extends Employees{
    constructor()
    {
        super();
        this.work;
        this.salary = 40000;
    }
    getGwop(){
        return salary;
    }
    getCleaning(){
        if(this.work=== true){
            return "Is wroking hard... sweeping. "
        }
        else{
            return "They must be off today, no one is sweeping! "
            }
     }   
}
module.exports = Janitor;