const { readFileSync } = require("fs");

class TrebuchetCalibrationCalculation {
    constructor(path){
        this.path = path;
        this.doc = this.readDoc();
    }

    readDoc = () => {
        const input = readFileSync(this.path).toString(); 
        return input;
    };

    calculateSumOfValues = () => {
        const splitText = this.doc.split("\n");
        const arrayOfValues = splitText.map(this.decodeValuesFromText);
        let sum = 0;
        for (var i in arrayOfValues) {
            sum += arrayOfValues[i];
        }
        return sum;
    };

    decodeValuesFromText = (str) => {
        var nonNumberRegex = /[^0-9]/g;
        var stringofNumbers = str.replace(nonNumberRegex, '');
        if (stringofNumbers.length === 0) {
            return 0;
        }
        if (stringofNumbers.length > 0) {
            let calibrationValue = stringofNumbers[0] + stringofNumbers[stringofNumbers.length-1];
            return parseInt(calibrationValue)
        }
        
    };

}

const path = "./input.txt";
const Calculator = new TrebuchetCalibrationCalculation(path);
console.log(Calculator.calculateSumOfValues());


module.exports = TrebuchetCalibrationCalculation;