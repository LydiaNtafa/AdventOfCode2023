const { readFileSync } = require("fs");

class TrebuchetCalibrationCalculation {
    constructor(path){
        this.path = path;
        this.values = this.readValues();
    }

    readValues = () => {
        const input = readFileSync(this.path).toString();
        return input;
    }

    displayValues = () => {
        console.log(this.values);
    }


}

const path = "./mockInput.txt";
const Calculator = new TrebuchetCalibrationCalculation(path);
Calculator.displayValues();


module.exports = TrebuchetCalibrationCalculation;