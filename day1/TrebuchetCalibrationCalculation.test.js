const TrebuchetCalibrationCalculation = require("./TrebuchetCalibrationCalculation.js");

describe("Trebuchet Calibration Calculator", () =>{
    it("reads the calibration values from the file", () =>{
        const path = "./mockInput.txt";
        const Calculator = new TrebuchetCalibrationCalculation(path);
        expect(Calculator.doc).toEqual(`1abc2\n`+
        `pqr3stu8vwx\n`+
        `a1b2c3d4e5f\n`+
        `treb7uchet`);
    })

    it("decodes the values from the file", () =>{
        const path = "./mockInput.txt";
        const Calculator = new TrebuchetCalibrationCalculation(path);
        expect(Calculator.decodeValuesFromText("pqr3stu8vwx")).toEqual(38);
    })

    it("calculates the sum of values", () =>{
        const path = "./mockInput.txt";
        const Calculator = new TrebuchetCalibrationCalculation(path);
        expect(Calculator.calculateSumOfValues()).toEqual(142);
    })
})