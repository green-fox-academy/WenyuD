// Represent the following products with their prices
// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
var shoppingList = new Map()
shoppingList.set('Milk', 1.07)
shoppingList.set('Rice', 1.59)
shoppingList.set('Eggs', 3.14)
shoppingList.set('Cheese', 12.60)
shoppingList.set('Chicken Breasts', 9.40)
shoppingList.set('Apples', 2.31)
shoppingList.set('Tomato', 2.58)
shoppingList.set('Potato', 1.75)
shoppingList.set('Onion', 1.10)

// Represent Bob's shopping list
// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
var BobsShoppingList = new Map()
BobsShoppingList.set('Milk', 3)
BobsShoppingList.set('Rice', 2)
BobsShoppingList.set('Eggs', 2)
BobsShoppingList.set('Cheese', 1)
BobsShoppingList.set('Chicken Breasts', 4)
BobsShoppingList.set('Apples', 1)
BobsShoppingList.set('Tomato', 2)
BobsShoppingList.set('Potato', 1)

// Represent Alice's shopping list
// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
var AlicesShoppingList = new Map()
AlicesShoppingList.set('Rice', 1)
AlicesShoppingList.set('Eggs', 5)
AlicesShoppingList.set('Chicken Breasts', 2)
AlicesShoppingList.set('Apples', 1)
AlicesShoppingList.set('Tomato', 10)

// Create an application which solves the following problems.
let BobPays = 0
let BobBuysPiece = 0
let AlicePays = 0
let AliceBuysPiece = 0
for (var [key, value] of BobsShoppingList) {
    BobPays += shoppingList.get(key) * value
    BobBuysPiece += value
}
for (var [key, value] of AlicesShoppingList) {
    AlicePays += shoppingList.get(key) * value
    AliceBuysPiece += value
}
// How much does Bob pay?
console.log(BobPays)
// How much does Alice pay?
console.log(AlicePays)
// Who buys more Rice?
if (BobsShoppingList.get('Rice') > AlicesShoppingList.get('Rice')) {
    console.log('Bob buys more rice.')
} else if (BobsShoppingList.get('Rice') < AlicesShoppingList.get('Rice')) {
    console.log('Alice buys more rice.')
} else {
    console.log('They both pay the same.')
}
// Who buys more Potato?
if (BobsShoppingList.get('Potato') > AlicesShoppingList.get('Potato')) {
    console.log('Bob buys more potato.')
} else if (BobsShoppingList.get('Potato') < AlicesShoppingList.get('Potato')) {
    console.log('Alice buys more potato.')
} else {
    console.log('They both pay the same.')
}
// Who buys more different products?
if (BobsShoppingList.size > AlicesShoppingList.size) {
    console.log('Bob buys more different products.')
} else if (BobsShoppingList.size < AlicesShoppingList.size) {
    console.log('Alice buys more different products.')
} else {
    console.log('They both pay the same.')
}
// Who buys more products? (piece)
if (BobBuysPiece > AliceBuysPiece) {
    console.log('Bob buys more pieces.')
} else if (BobBuysPiece < AliceBuysPiece) {
    console.log('Alice buys more pieces.')
} else {
    console.log('They both pay the same.')
}