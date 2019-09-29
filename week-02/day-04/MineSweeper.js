'use strict';
const readline = require('readline');

// const rl = readline.createInterface(process.stdin, process.stdout);

class MineSweeper {
    constructor() {
        this.mineMap = [];
        this.size = 3;
        this.mineNumber = this.size;
        this.layedMine = 0;
    }   


    drawMap() {
        for (let i = 0; i < this.size; i++) {
            this.mineMap.push([]);
            for (let j = 0; j < this.size; j++) {
                this.mineMap[i].push('*');
            }
        }
    }

    layMine(mineNumber) {
        this.drawMap();

        

        for (let i = 0; i < this.size; i++) {
            this.mineMap.push([]);
            for (let j = 0; j < this.size; j++) {
                if (this.layedMine < mineNumber) {
                    this.mineMap[i].push('M');
                    this.layedMine++;    
                } else {
                    this.mineMap[i].push('*');
                }
            }
        }

        console.log(this.mineMap);
    }
}


let mineSweeper = new MineSweeper();
// mineSweeper.drawMap();
mineSweeper.layMine(3);


// rl.question('How big the gameplay should be (n)? ', (size) => {
//     rl.question('How many mines you\'d like to find (k)? ', (mines) => {
//         console.log(`${size}, as well as ${mines}`);
//         for (let i = 0; i < size; i++) {
//                 mineMap.push([]);
//             for (let j = 0; j < size; j++) {
//                 mineMap[i].push('*');
//             }
//         }
//         layMine(mines);
//         console.log(mineMap);

//         rl.close();
//     })
// });