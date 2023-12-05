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

    calculateScratchcards = () => {
        let sum=0;
        const splitText = this.doc.split("\n");
        const arrayOfGameArrays = splitText.map(this.createGameArray);
        let numberOfCards = new Array(arrayOfGameArrays.length).fill(1);
        const arrayOfMatches = arrayOfGameArrays.map(this.calculateMatchingNumbers);
        for (let i = 0; i < arrayOfMatches.length; i++ ) {
            if (arrayOfMatches[i]>0) {
                for (let c=0; c<numberOfCards[i]; c++){
                    for (let j = i+1; j <= arrayOfMatches[i]+i; j++ ){
                        numberOfCards[j]+=1;
                    }
                }
            }
        }
        for (let i = 0; i < numberOfCards.length; i++ ) {
            sum += numberOfCards[i];
        }
        return sum;
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

    calculateMatchingNumbers = (array) => {
        let intersection = array[0].filter(element => array[1].includes(element));
        return intersection.length;
    }
}

const path = "./input.txt";
const Game = new Scratchcards(path);
console.log(Game.calculateScratchcards());

module.exports = Scratchcards;