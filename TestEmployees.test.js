const Employees = require("./Employees");
const underTest = new Employees;

const EmployeeMaker = require("./EmployeeMaker");
const underTest = new EmployeeMaker;

describe("Employees", () =>{
    test("does Employees work>", () =>{

         let testEmployee = Employees;
         testEmployee.name = "Jason";
         testEmployee.idNum = 123;

        expect(testEmployee.idNum + 1).toEqual(124);
    })

    test("does EmployeeMaker work>", () =>{

        let testEmployee = Employees;
        testEmployee.name = "Jason";
        testEmployee.idNum = 123;

       expect(testEmployee.idNum + 1).toEqual(124);
   })
})
