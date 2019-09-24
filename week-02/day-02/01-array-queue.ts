'use strict';
import Queue from './Interfaces/Queue';

class ArrayQueue implements Queue {
    array: string[];
    constructor() {
        this.array = [];
    }

    empty() {
        return this.array.length === 0;
    }

    peek() {
        return this.array[0];
    }

    add(input: string) {
        this.array.push(input);
    }

    remove() {
        return this.array.shift();
    }
}

let arrayQueue = new ArrayQueue();
console.log(arrayQueue.empty());
console.log(arrayQueue.add(`${Math.random()}`));
console.log(arrayQueue.add(`${Math.random()}`));
console.log(arrayQueue.add(`${Math.random()}`));
console.log(arrayQueue.peek());
console.log(arrayQueue.remove());
console.log(arrayQueue.peek());