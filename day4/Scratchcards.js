const { readFileSync } = require("fs");

class Scratchcards{
    constructor(path) {
        this.path = path;
        this.doc = this.readDoc();
    }

    readDoc = () => {
        const input = readFileSync(this.path).toString(); 
        return input;
    };

    calculateWinningPoints = () => {
        const splitText = this.doc.split("\n");
        const arrayOfGameArrays = splitText.map(this.createGameArray);
        return arrayOfGameArrays;
    }

    createGameArray = (line) => {
        var gameArray = [];
        line=line.replace("\r", '');
        const colon = line.indexOf(":");
        const bar = line.indexOf("|")
        const stringOfWinningNumbers = line.substring(colon+1,bar);
        var arrayOfWinningNumbers = stringOfWinningNumbers.split(/\D+/).filter(Boolean).map(Number);
        gameArray.push(arrayOfWinningNumbers);
        const stringOfNumberAtHand = line.substring(bar+1,line.length+1);
        var arrayOfNumberAtHand = stringOfNumberAtHand.split(/\D+/).filter(Boolean).map(Number);
        gameArray.push(arrayOfNumberAtHand);
        return gameArray;
    }

}

const path = "./mockInput.txt";
const Game = new Scratchcards(path);
console.log(Game.calculateWinningPoints());

module.exports = Scratchcards;