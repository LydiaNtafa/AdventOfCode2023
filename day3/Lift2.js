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

    addUpAllTheGearRatios= () => {
        let sum = 0;
        let gearsAndNumbers = {};
        const array2D = this.convertDocTo2DArray();
        for (let i=0; i<array2D.length; i++){
            var gearSymbol= "*";
            let positionOfGears="";
            var number = "";
            var isAdjacentToGear = false;
            for (let j=0; j<array2D[i].length; j++){
                if( !isNaN(parseInt(array2D[i][j])) ){
                    number += array2D[i][j];
                    if (!isAdjacentToGear){
                        for(let x=i-1; x<=i+1; x++){
                            if(x>=0 && x<array2D.length){
                                for (let y=j-1; y<=j+1; y++){
                                    if(y>=0 && y<array2D[i].length){
                                        if(gearSymbol===array2D[x][y]){
                                            isAdjacentToGear= true;
                                            positionOfGears= x.toString() + y.toString()
                                            x=i+2;
                                            y=j+2;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (number!="" && isAdjacentToGear){
                        if(!gearsAndNumbers[positionOfGears]){
                            gearsAndNumbers[positionOfGears]=[];
                        }
                        gearsAndNumbers[positionOfGears].push(number);
                    }
                    isAdjacentToGear = false;
                    number = "";
                    positionOfGears="";
                }
            }
        }
        Object.values(gearsAndNumbers).forEach( (numbers) => {
            if(numbers.length===2){
                sum+=numbers[0]*numbers[1]
            }
        });
        return sum;
    }

    convertDocTo2DArray = () => {
        const splitText = this.doc.split("\n");
        const array2D =[];
        splitText.forEach((line) => {
            line=line.replace("\r", '');
            line += ".";
            array2D.push(line.split(""));
        })
        return array2D
    }
}
// const path = "./mockInput.txt";
// const Lift = new GondolaLift(path);
// console.log(Lift.addUpAllTheGearRatios());

module.exports = GondolaLift;