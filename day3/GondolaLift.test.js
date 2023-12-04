const GondolaLift = require("./GondolaLift.js");

describe("Gondola Lift", () => {
    it("reads several game results form a file", () => {
        const path = "./mockInput.txt";
        const Lift = new GondolaLift(path);
        expect(Lift.doc).toBeTruthy();
    })
})