const GondolaLift = require("./GondolaLift.js");

describe("Gondola Lift", () => {
    it("reads several game results form a file", () => {
        const path = "./mockInput.txt";
        const Lift = new GondolaLift(path);
        expect(Lift.doc).toBeTruthy();
    });

    it("converts the input to a 2d array", () => {
        const path = "./mockInput.txt";
        const Lift = new GondolaLift(path);
        expect(Lift.convertDocTo2DArray()).toEqual([
            ['4', '6', '7', '.','.', '1', '1', '4','.', '.'],
            ['.', '.', '.', '*','.', '.', '.', '.','.', '.'],
            ['.', '.', '3', '5','.', '.', '6', '3','3', '.'],
            ['.', '.', '.', '.','.', '.', '#', '.','.', '.'],
            ['6', '1', '7', '*','.', '.', '.', '.','.', '.'],
            ['.', '.', '.', '.','.', '+', '.', '5','8', '.'],
            ['.', '.', '5', '9','2', '.', '.', '.','.', '.'],
            ['.', '.', '.', '.','.', '.', '7', '5','5', '.'],
            ['.', '.', '.', '$','.', '*', '.', '.','.', '.'],
            ['.', '6', '6', '4','.', '5', '9', '8','.', '.']
        ]);
    })

    it("checks if a number adjacent to a symbol and add it to sum", () => {
        const path = "./mockInput.txt";
        const Lift = new GondolaLift(path);
        expect(Lift.addUpAllThePartNumbers()).toEqual(4361);
    })


})