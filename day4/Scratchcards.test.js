const Scratchcards = require("./Scratchcards.js");

describe("Scratchcards Game", () => {
    it("reads several game results form a file", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.doc).toBeTruthy();
    });

    it("converts each line into 2 arrays of numbers", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.createGameArray(`Card   1: 41 48 83 86 17 |`+
        ` 83 86  6 31 17  9 48 53\r`,)).toEqual([[41,48,83,86,17],[83,86,6,31,17,9,48,53]])
    });

    it("calculates the points of each card", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.calculateCardPoints([[41,48,83,86,17],[83,86,6,31,17,9,48,53]]))
        .toEqual(8);
    });

    it("calculates the sum of points of all cards", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.calculatePoints()).toEqual(13);
    })
})