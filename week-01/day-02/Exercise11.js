// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

const sideLength = 8

for (let i = 0; i < sideLength; i++) {
    let chess = ``
    if (i % 2 === 0) {
        for (let j = 0; j < sideLength; j++) {
            if (j % 2 === 0) {
                chess += `%`
            } else {
                chess += ` `
            }
        }
    } else {
        for (let j = 0; j < sideLength; j++) {
            if (j % 2 === 0) {
                chess += ` `
            } else {
                chess += `%`
            }
        }
    }
    console.log(chess)
}