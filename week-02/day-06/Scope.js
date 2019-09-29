// without ES6
function average(numberList) {
    return numberList.reduce((accumulator, currentValue) => accumulator + currentValue) / numberList.length;
}

// with ES^
function average2(numberList) {
    const listLength = numberList.length;
    return numberList.reduce((accumulator, currentValue) => accumulator + currentValue) / listLength;
}

const numberList = [21,43,432,321,34,12,23,4,5,6];
console.log(average(numberList));
console.log(average2(numberList));