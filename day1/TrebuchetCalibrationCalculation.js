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
        var stringOfNumbers = this.decodeSpelledOutNumbersIntoNumbers(str);
        var nonNumberRegex = /[^0-9]/g;
        stringOfNumbers = stringOfNumbers.replace(nonNumberRegex, '');
        if (stringOfNumbers.length === 0) {
            return 0;
        }
        if (stringOfNumbers.length > 0) {
            let calibrationValue = stringOfNumbers[0] + stringOfNumbers[stringOfNumbers.length-1];
            return parseInt(calibrationValue)
        }
    };

    decodeSpelledOutNumbersIntoNumbers = (initialString) => {
        var substring9 = /nine/g;
        var substring8 = /eight/g;
        var substring7 = /seven/g;
        var substring6 = /six/g;
        var substring5 = /five/g;
        var substring4 = /four/g;
        var substring3 = /three/g;
        var substring2 = /two/g;
        var substring1 = /one/g;
        var convertNinesTo9s = initialString.replace(substring9, `n9e`);
        var convertEightsTo8s = convertNinesTo9s.replace(substring8, `e8t`);
        var convertSevensTo7s = convertEightsTo8s.replace(substring7, `s7n`);
        var convertSixsTo6s = convertSevensTo7s.replace(substring6, `s6x`);
        var convertFivesTo5s = convertSixsTo6s.replace(substring5, `f5e`);
        var convertFoursTo4s = convertFivesTo5s.replace(substring4, `f4r`);
        var convertThreesTo3s = convertFoursTo4s.replace(substring3, `t3e`);
        var convertTwosTo2s = convertThreesTo3s.replace(substring2, `t2o`);
        var finalString = convertTwosTo2s.replace(substring1, `o1e`);
        return finalString;
    }
}

const path = "./input.txt";
const Calculator = new TrebuchetCalibrationCalculation(path);
console.log(Calculator.calculateSumOfValues());


module.exports = TrebuchetCalibrationCalculation;