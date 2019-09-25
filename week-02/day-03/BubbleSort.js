'use strict';

const array = [1,4,2,3,44,11,23,23,4,354,1];

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            let temp = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
} 

console.time('bubble');
console.log(bubbleSort(array));
console.timeEnd('bubble');