const { readFileSync } = require("fs");

class GondolaLift {
    constructor(path) {
        this.path = path;
        this.doc = this.readDoc();
    }

    readDoc = () => {
        const input = readFileSync(this.path).toString(); 
        return input;
    };

    addUpAllThePartNumbers= () => {
        let sum = 0;
        const array2D = this.convertDocTo2DArray();
        for (let i=0; i<array2D.length; i++){
            var nonSymbolChars= "0123456789."
            var number = "";
            var isAdjacent = false;
            for (let j=0; j<array2D[i].length; j++){
                if( !isNaN(parseInt(array2D[i][j])) ){
                    number += array2D[i][j];
                    if (!isAdjacent){
                        for(let x=i-1; x<=i+1; x++){
                            if(x>0 && x<array2D.length){
                                for (let y=j-1; y<=j+1; y++){
                                    if(y>0 && y<array2D[i].length){
                                        if(!nonSymbolChars.includes(array2D[x][y])){
                                            isAdjacent= true;
                                            x=i+2;
                                            y=j+2;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (number!="" && isAdjacent){
                        sum += parseInt(number);
                    }
                    isAdjacent = false;
                    number = "";
                    
                }
            }
        }
        return sum;
    }

    convertDocTo2DArray = () => {
        const splitText = this.doc.split("\n");
        const array2D =[];
        splitText.forEach((line) => {
            line=line.replace("\r", '');
            array2D.push(line.split(""));
        })
        return array2D
    }

}

// const path = "./mockInput.txt";
// const Lift = new GondolaLift(path);
// console.log(Lift.addUpAllThePartNumbers());

module.exports = GondolaLift;