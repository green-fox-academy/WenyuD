'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let height = 10.2;
let width = 8.8;
let length = 9.9;

console.log('Surface Area: ' + (height*width + height*length + width*length)*2);
console.log('Volume: ' + height * width * length);