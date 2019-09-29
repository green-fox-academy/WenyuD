const obj = {x:1,y:20,z:3};

let temp = 0;
let word = '';
function findWord(obj){
    for(let entry of Object.entries(obj)) {
        if (entry[1] > temp) {
            temp = entry[1];
            word = entry[0];
        }
    }
    return word;
}

console.log(findWord(obj));