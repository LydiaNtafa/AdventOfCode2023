const { readFileSync } = require("fs");

class GondolaLift {
    constructor(path) {
        this.path = path;
        this.doc = this.readDoc();
    }

    readDoc = () => {
        const input = readFileSync(this.path).toString(); 
        return input;
    };

    addUpAllThePartNumbers= () => {
        const splitText = this.doc.split("\n");
        const array2D =[];
        splitText.forEach((line) => {
            line=line.replace("\r", '');
            array2D.push(line.split(""));
        })
        
    }

}

const path = "./mockInput.txt";
const Lift = new GondolaLift(path);
console.log(Lift.addUpAllThePartNumbers());

module.exports = GondolaLift;