const matrix = [];

function matrixM(row, column, ...rest) {
    if (rest.length < row * column) {
        return null;
    } else {
        for (let i = 0; i < row; i++) {
            matrix.push([]);
            for (let j = 0; j < column; j++) {
                matrix[i].push(rest.shift());
            }
        }
        return matrix;
    }
}

console.log(matrixM(3,4,6,34,5,7,4,2,4,5,7,3,2,4))