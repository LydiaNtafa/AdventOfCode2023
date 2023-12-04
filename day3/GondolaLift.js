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

}

const path = "./mockInput.txt";
const Lift = new GondolaLift(path);
console.log(Lift.doc);

module.exports = GondolaLift;