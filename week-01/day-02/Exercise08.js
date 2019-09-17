'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let centerLine = Math.floor(lineCount/2)

for (let i = 0; i < centerLine; i++) {
    let pyramid = ``
    for (let j = 0; j < lineCount*2; j++) {
        if (j >= lineCount - i && j <= lineCount + i) {
            pyramid = pyramid.concat(`*`)
        } else {
            pyramid = pyramid.concat(` `)
        }
    }
    console.log(pyramid)
}
for (let i = centerLine; i >= 0; i--) {
    let pyramid = ``
    for (let j = lineCount*2; j >0; j--) {
        if (j >= lineCount - i && j <= lineCount + i) {
            pyramid = pyramid.concat(`*`)
        } else {
            pyramid = pyramid.concat(` `)
        }
    }
    console.log(pyramid)
}