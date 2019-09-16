const Employees = require("./Employees");
const Doctor = require("./Doctor");

class Surgeon extends Employees{
    constructor(){ 
        super();
        this.salary = 120000;
}}
module.export = Surgeon;