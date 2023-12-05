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
        const arrayOfPoints = arrayOfGameArrays.map(this.calculateWinningPoints);
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

    calculateWinningPoints = (array) => {
        let points = 1;
        let intersection = array[0].filter(element => array[1].includes(element));
        if (intersection.length === 0){
            points = 0;
        } else {
            for (let i = 1; i < intersection.length; i++) {
                points *= 2;
            }
        }
        return points;
    }

}

const path = "./mockInput.txt";
const Game = new Scratchcards(path);
console.log(Game.calculateWinningPoints([[10,22,53,59,44],[69,82,63,72,16,21,14,1]]));

module.exports = Scratchcards;