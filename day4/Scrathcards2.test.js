const Scratchcards = require("./Scrathcards2.js");

describe("Scratchcards Game", () => {
    it("calculates the sum of scratchcards", () => {
        const path = "./input.txt";
        const Game = new Scratchcards(path);
        expect(Game.calculateScratchcards()).toEqual(13080971);
    })
})