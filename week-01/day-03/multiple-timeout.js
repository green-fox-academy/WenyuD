'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
setTimeout(() => {
    console.log('Apple')
}, 0);
// pear -> after 1 seconds
setTimeout(() => {
    console.log('Pear')
}, 1000);
// melon -> after 3 seconds
setTimeout(() => {
    console.log('Melon')
}, 3000);
// grapes -> after 5 seconds
setTimeout(() => {
    console.log('Grapes')
}, 5000);

