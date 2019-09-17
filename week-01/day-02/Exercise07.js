'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
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
