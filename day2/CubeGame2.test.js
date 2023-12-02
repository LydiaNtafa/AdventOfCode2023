const CubeGame = require("./CubeGame2.js");

describe("Cube Game", () => {
    it("the sum of powers per game", () => {
        const path = "./mockInput.txt";
        const Game = new CubeGame(path);
        expect(Game.calculateGames()).toEqual(2286);
    })
})