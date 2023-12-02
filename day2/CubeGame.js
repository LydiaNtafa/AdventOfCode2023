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


}

module.exports = CubeGame;