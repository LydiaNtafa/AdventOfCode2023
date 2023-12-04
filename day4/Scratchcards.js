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

}

const path = "./mockInput.txt";
const Game = new Scratchcards(path);
console.log(Game.doc);

module.exports = Scratchcards;