'use strict';
import Stack from './Interfaces/Stack';

class ArrayStack implements Stack {
    array : string[];
    constructor(){
        this.array = [];
    }

    empty() {
        return this.array.length === 0;
    }

    peek() {
        return this.array[0];
    }

    push(input: string) {
        this.array.push(input);
    }

    pop() {
        return this.array.pop();
    }
}

let arrayStack = new ArrayStack();
console.log(arrayStack.empty());
console.log(arrayStack.push(`${Math.random()}`));
console.log(arrayStack.push(`${Math.random()}`));
console.log(arrayStack.push(`${Math.random()}`));
console.log(arrayStack.peek());
console.log(arrayStack.pop());
console.log(arrayStack.peek());