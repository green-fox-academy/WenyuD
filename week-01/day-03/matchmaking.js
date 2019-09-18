'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

const makingMatches = (array1, array2) => {
    const newArray = []
    let pair = Math.min(array1.length, array2.length)
    let moreArray = array1.length > array2.length ? array1 : array2
    
    for (let i = 0; i < pair; i++) {
        newArray.push(array1[i])
        newArray.push(array2[i])
    }
    for (let i = pair; i < moreArray.length; i++) {
        newArray.push(moreArray[i])
    }
    return newArray
}

console.log(makingMatches(girls, boys));

module.exports = makingMatches;