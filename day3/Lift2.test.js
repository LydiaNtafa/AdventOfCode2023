const GondolaLift = require("./Lift2.js");

describe("Gondola Lift2", () => {
    it("calculates the sum of all of the gear ratios", () => {
        const path = "./mockInput.txt";
        const Lift = new GondolaLift(path);
        expect(Lift.addUpAllTheGearRatios()).toEqual(467835);
    })

})