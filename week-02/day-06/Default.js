// default values before ES6
function coffee(sugar, milk) {
    if (sugar === undefined && milk === undefined) {
        sugar = false;
        milk = false;
    } else {
        if (sugar === false && milk === false) {
            return 'coffee';
        } else if (sugar === false && milk === true) {
            return 'coffee with milk';
        } else if (sugar === true && milk === false) {
            return 'coffee with sugar';
        } else if (sugar === true && milk === true) {
            return 'coffee with sugar and with milk';
        }
    }
}

// with ES6
function coffee2(sugar = false, milk = false) {
    if (sugar === false && milk === false) {
        return 'coffee';
    } else if (sugar === false && milk === true) {
        return 'coffee with milk';
    } else if (sugar === true && milk === false) {
        return 'coffee with sugar';
    } else if (sugar === true && milk === true) {
        return 'coffee with sugar and with milk';
    }
}