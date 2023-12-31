const CubeGame = require("./CubeGame.js");

describe("Cube Game", () => {
    // it("reads several game results form a file", () => {
    //     const path = "./mockInput.txt";
    //     const Game = new CubeGame(path);
    //     expect(Game.doc).toEqual(`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n`+
    //     `Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n`+
    //     `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n`+
    //     `Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n`+
    //     `Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`)
    // })

    it("converts every line into a Game array", () => {
        const path = "./mockInput.txt";
        const Game = new CubeGame(path);
        expect(Game.createGameArray(`Game 51: 3 green, 1 blue; 1 red; 1 green, 7 blue\n`)).toEqual([ 51, ' 3 green, 1 blue', ' 1 red', ' 1 green, 7 blue\n' ]);
    })
    
    it("finds the number of cubes per subset when colour is given", () => {
        const path = "./mockInput.txt";
        const Game = new CubeGame(path);
        expect(Game.findCubes("red",`3 green, 1 blue`)).toEqual(0);
        expect(Game.findCubes("blue",`3 green, 1 blue`)).toEqual(1);
    })

    it("finds the number of possible games for 12 red cubes, 13 green cubes, and 14 blue cubes", () => {
        const path = "./mockInput.txt";
        const Game = new CubeGame(path);
        expect(Game.calculateGames()).toEqual(8);
    })
})