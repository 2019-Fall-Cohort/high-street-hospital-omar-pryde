const Employees = require("./Employees");
const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");
const Receptionist = require("./Receptionist");
const Janitor = require("./Janitor");
const VampireJanitor = require("./VampireJanitor");
const Nurse = require("./Nurse");
const Patient = require("./Patient"); 

class Hospital {
    constructor(numOfDoctors, numOfSurgeons, numOfReceptionists, numOfJanitors, numOfVampJanitors, numOfPatients){
        this.employedDoctors = hireDoctors(numOfDoctors);
        this.employedSurgeons = hireSurgeons(numOfSurgeons);
        this.employedReceptionists = hireReceptionists(numOfReceptionists);
        this.employedJanitors = hireJanitors(numOfJanitors);
        this.employedVampJanitors = hireVampJanitors(numOfVampJanitors);
        this.employedNurses = hireNurses(numOfNurses);
        this.allPatients = admitPatients(numOfPatients);

    }

    hireDoctors(numberOfDoctors){

        let employedDoctors = []
        let name;
        let idNum;
        let counter;
        let newDoctor;

        do{
            name = "Dr. " + getRandomName();
            idNum = getRandomID();

            newDoctor = new Doctor(name, idNum, "Doctor", 90000, true);
            employedDoctors.push(newDoctor);

            counter = counter + 1;

        } while (counter < numberOfDoctors);
    
        return employedDoctors;
    
    }

    hireSurgeons(numberOfSurgeons){

        let employedSurgeons = []
        let name;
        let idNum;
        let counter;
        let newSurgeon;

        do{
            name = "Surgeon " + getRandomName();
            idNum = getRandomID();

            newSurgeon = new Surgeon(name, idNum, "Surgeon", 120000, true);
            employedSurgeons.push(newSurgeon);

            counter = counter + 1;

        } while (counter < numberOfSurgeons);
    
        return employedSurgeons;
    
    }

    hireReceptionists(numberOfReceptionists){

        let employedReceptionists = []
        let name;
        let idNum;
        let counter;
        let newReceptionist;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newReceptionist = new Receptionist(name, idNum);
            employedReceptionists.push(newReceptionist);

            counter = counter + 1;

        } while (counter < numberOfReceptionists);
    
        return employedReceptionists
    }

    hireJanitors(numberOfJanitors){

        let employedJanitors = []
        let name;
        let idNum;
        let counter;
        let newJanitor;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newJanitor = new Janitor(name, idNum, "Janitor");
            employedJanitors.push(newJanitor);

            counter = counter + 1;

        } while (counter < numberOfJanitors);
        
        return employedJanitors;
        
    }

    hireVampJanitors(numberOfVampJanitors){

        let employedVampJanitors = [];
        let name;
        let idNum;
        let counter;
        let newVampJanitors;

        do{
            name = getRandomName();
            idNum = getRandomID();

            newVampJanitors = new VampireJanitor(name, idNum);
            employedVampJanitors.push(newVampJanitor);

            counter = counter + 1;

        } while (counter < numberOfVampJanitors);

        return employedVampJanitors;
    }

    hireNurses(numberOfNurses){

        let employedNurses = []
        let name;
        let idNum;
        let counter;
        let newNurses;
        let PatientsList;

        do{
            name = getRandomName();
            idNum = getRandomID();
            PatientsList = getPatientsList(sizeOfList)

            newNurses = new Nurse(name, idNum, PatientsList);
            employedNurses.push(newNurses);

            counter = counter + 1;

        } while (counter < numberOfNurses);
        
        return employedNurses;
        
    }

    admitPatients(numOfPatients){

        let admitedPatients = []
        let name;
        let newPatient;
        

        do{
            name = getRandomName();

            newPatient = new Patient(name);
            admitedPatients.push(newPatient);

            counter = counter + 1;

        } while (counter < numOfPatients);
        
        return admitedPatients;
    }

    getRandomName(){
        nameArray = ["Josh", "David", "Marie", "Ana", "Joe", "Layla", "Paul", "Chris", "Christina", "Paulina", "Krista", "Donald", "Goofy", "Minnie", "Leslie", "Bill", "Lacey", "Kendra", "Karen", "Katherine", "Tracey", "Richard", "Erica", "Juan", "Ricardo", "Fernanda", "Maria", "Juanita", "Lola" ];
        return  nameArray[Math.floor((nameArray.length * Math.random())) - 1];
    }

    getRandomID(){
        let idLength = 6;
        let empId =  "";

        while(idLength > 0) {
        const idArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
        empId = empId + idArray[getRandomElement(idArray.length)];
        idLength --;
            }   
        return empId;
    }

}

module.exports = Hospital;