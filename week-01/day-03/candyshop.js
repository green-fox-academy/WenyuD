'use strict';

const shop_items = ["Cupcake", 2, "Brownie", false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

const sweets = (array) => {
    array.splice(1,1,'Croissant')
    array.splice(3,1,'Ice cream')
    return array
}

console.log(sweets(shop_items))
module.exports = sweets;