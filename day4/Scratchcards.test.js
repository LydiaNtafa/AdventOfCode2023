const Scratchcards = require("./Scratchcards.js");

describe("Scratchcards Game", () => {
    it("reads several game results form a file", () => {
        const path = "./mockInput.txt";
        const Game = new Scratchcards(path);
        expect(Game.doc).toBeTruthy();
    });
})