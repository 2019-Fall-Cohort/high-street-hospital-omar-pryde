class Patient{
    constructor(patientName, bloodLevel, healthLevel){

        this.patientName = this.getRandomName();
        this.bloodLevel = this.getRandomLevel();
        this.healthLevel = this.getRandomLevel();
    }

    getRandomName(){
        nameArray = ["Josh", "David", "Marie", "Ana", "Joe", "Layla" ];
        return  nameArray[Math.floor(6 * Math.random())];   
    }
    
    
    getRandomLevel() {
        return Math.floor(100 * Math.random());
    }

}

module.exports = Patient;
    