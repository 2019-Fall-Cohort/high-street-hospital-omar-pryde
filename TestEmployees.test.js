const Employees = require("./Employees");
const underTest = new Employees;

describe("Employees", () =>{
    test("does Employees work>", () =>{

         let testEmployee = new Employees;

        expect(testEmployee.idNum + 1).toEqual(124);
   })
})
