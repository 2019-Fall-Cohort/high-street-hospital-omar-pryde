class Patient{
    constructor(){

        let patientName = getRandomName();
        let bloodLevel = getRandomLevel();
        let healthLevel = getRandomLevel();
    }

    getRandomName(){

        nameArray = ["Josh", "David", "Marie", "Ana", "Joe", "Layla" ];
        switch (Math.floor(6 * Math.random())) {

            case "0": return nameArray[0];
            break;

            case "1": return nameArray[1];
            break;

            case "2": return nameArray[2];
            break;

            case "3": return nameArray[3];
            break;

            case "4": return nameArray[4];
            break;

            case "5": return nameArray[5];
            break;

            default: return "Spongebob";
           
            
        }
    }
    
    getRandomLevel() {
        return Math.floor(100 * Math.random());
    }

}

module.exports = Patient;
    