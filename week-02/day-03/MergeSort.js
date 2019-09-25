'use strict';

const array = [1,4,2,3,44,11,23,23,4,354,1];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midPoint = Math.floor(array.length / 2);

    let leftArray = array.slice(0, midPoint);
    let rightArray = array.slice(midPoint);

    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    let result = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] < rightArray[rightPointer]) {
            result.push(leftArray[leftPointer]);
            leftPointer++;
        } else {
            result.push(rightArray[rightPointer]);
            rightPointer++;
        }
    }

    return result.concat(leftArray.slice(leftPointer)).concat(rightArray.slice(rightPointer));
}

console.log(mergeSort(array));