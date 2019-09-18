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
// Which products cost less than 201? (just the name)
const cheapProducts = []
for (var [key, value] of map) {
    if (value < 201) {
        cheapProducts.push(key)
    }
}
console.log(cheapProducts)

// Which products cost more than 150? (name + price)
const expensiveProducts = []
for (var [key, value] of map) {
    if (value > 150) {
        expensiveProducts.push(key, value)
    }
}
console.log(expensiveProducts)