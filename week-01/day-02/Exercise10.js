'use strict';

const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is


for (let i = 0; i < lineCount; i++) {
    let square = ``
    if (i === 0 || i === lineCount-1) {
        for (let j = 0; j < lineCount; j++) {
            square += `%`
        }
    } else {
        for (let j = 0; j < lineCount; j++) {
            if (j === 0 || j === i || j === lineCount-1) {
                square += `%`
            } else {
                square += ` `
            }
        }
    }
    console.log(square)
}