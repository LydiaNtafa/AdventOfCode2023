const { readFileSync } = require("fs");

class CubeGame {
    constructor(path) {
        this.path = path;
        this.doc = this.readDoc();
    }

    readDoc = () => {
        const input = readFileSync(this.path).toString(); 
        return input;
    };

    calculateGames= () => {
        sum = 0;
        const splitText = this.doc.split("\n");
        const arrayOfGameArrays = splitText.map(this.createGameArray);
        for (let i=0; i<arrayOfGameArrays.length; i++){
            for (let j=1; j<arrayOfGameArrays[i].length; i++){
                let redCubes = this.findCubes("red", arrayOfGameArrays[i][j]);
                
        }
        return sum;
    }

    createGameArray = (str) => {
        var nonNumberRegex = /[^0-9]/g;
        var gameArray = [];
        str = str.split(":");
        gameArray[0]= parseInt(str[0].replace(nonNumberRegex, ''));
        str = str[1].split(";")
        for (let i=0; i<str.length; i++) {
            gameArray[i+1]=str[i];
        }
        return gameArray;
    }

    findCubes = (colour,subsetOfCubes) => {
        let position = subsetOfCubes.search(colour);
        if (position === -1) {
            return 0;
        }
        return parseInt(subsetOfCubes.substring(position-3, position-1))
    }

}

const path = "./mockInput.txt";
const Game = new CubeGame(path);

module.exports = CubeGame;