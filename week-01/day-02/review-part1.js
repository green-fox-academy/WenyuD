'use strict'

let fruits = ['Apple', 'Banana', 'Kiwi', 'Watermelon']

function greet(name) {
    console.log(`Greetings, dear ${name}`)
}

let otherGreet = function(name) {
	console.log(`Greetings, dear ${name}`)
}

greet('name1')
greet('name2')
otherGreet('name3')

fruits.forEach(greet)

fruits.map(function(fruit) {
    return fruit + '!'
})
