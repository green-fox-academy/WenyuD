'use strict'
//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
var map = new Map()

// Print out whether the map is empty or not
if (map.size === 0) {
    console.log(`It's not empty`)
} else {
    console.log(`It's empty`);
}

// Add the following key-value pairs to the map
// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
map.set(97, 'a')
map.set(98, 'b')
map.set(99, 'c')
map.set(65, 'A')
map.set(66, 'B')
map.set(67, 'C')

// Print all the keys
console.log(map.keys())

// Print all the values
console.log(map.values())

// Add value D with the key 68
map.set(68, 'D')

// Print how many key-value pairs are in the map
console.log(map.size)

// Print the value that is associated with key 99
console.log(map.get(99))

// Remove the key-value pair where with key 97
map.delete(97)

// Print whether there is an associated value with key 100 or not
if (map.get(100)) {
    console.log(`There is an associated value with key 100.`)
} else {
    console.log(`There isn't an associated value with key 100.`)
}

// Remove all the key-value pairs
map.clear()