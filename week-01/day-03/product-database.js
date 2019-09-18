// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.
// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
var map = new Map()
map.set('Eggs', 200)
map.set('Milk', 200)
map.set('Fish', 400)
map.set('Apples', 150)
map.set('Bread', 50)
map.set('Chicken', 550)

// Create an application which solves the following problems.
// How much is the fish?
console.log(map.get('Fish'))

// What is the most expensive product?
let expensive = 0
let expensiveProduct = ''
for (var [key, value] of map) {
    if (value > expensive) {
        expensive = value
        expensiveProduct = key
    }
}
console.log(expensiveProduct)

// What is the average price?
let sum = 0
for (var [key, value] of map) {
    sum += value
}
console.log(sum/map.size)

// How many products' price is below 300?
let count = 0
for (var [key, value] of map) {
    if (value < 300) {
        count += 1
    }
}
console.log(count)

// Is there anything we can buy for exactly 125?
let anything
for (var [key, value] of map) {
    if (value === 125) {
        anything = 1
    }
}
if (anything) {
    console.log('Yes, there is.')
} else {
    console.log('No, there isn\'t.')
}

// What is the cheapest product?
let cheap
let cheapProduct
for (var [key, value] of map) {
    if (!cheap || value < cheap) {
        cheap = value
        cheapProduct = key
    }
}
console.log(cheapProduct)