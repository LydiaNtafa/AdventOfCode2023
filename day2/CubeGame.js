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
        
    }

    createGameArray = (str) => {
        var nonNumberRegex = /[^0-9]/g;
        var gameArray = [];
        str = str.split(":");
        gameArray[0]= parseInt(str[0].replace(nonNumberRegex, ''));
        str = str[1].split(";")
        console.log(str);
        for (let i=0; i<str.length; i++) {
            gameArray[i+1]=str[i];
        }
        return gameArray;
    }


}

const path = "./mockInput.txt";
const Game = new CubeGame(path);

module.exports = CubeGame;