const Scratchcards = require("./Scratchcards.js");

describe("Scratchcards Game", () => {
    it("reads several game results form a file", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.doc).toBeTruthy();
    });

    it("converts each line into 2 arryays of numbers", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.createGameArray(`Card   1: 41 48 83 86 17 |`+
        ` 83 86  6 31 17  9 48 53\r`,)).toEqual([[41,48,83,86,17],[83,86,6,31,17,9,48,53]])
    })
})