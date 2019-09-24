'use strict';
import StackNode from './03-stack-node';
import Queue from './Interfaces/Queue';

class QueueStack implements Queue {
    stackOne = new StackNode();
    stackTwo = new StackNode();
    length: number;
    constructor() {
        this.length = 0;
    }

    empty() {
        return this.length === 0;
    }

    peek() {
        while (!this.stackOne.empty()) {
            this.stackTwo.push(this.stackOne.pop());    
        }
        let temp = this.stackTwo.peek();
        while (!this.stackTwo.empty()) {
            this.stackOne.push(this.stackTwo.pop());    
        }
        return temp;
    }

    add(value: string) {
        this.length++;
        this.stackOne.push(value);
    }

    remove() {
        while (!this.stackOne.empty()) {
            this.stackTwo.push(this.stackOne.pop());    
        }
        let temp = this.stackTwo.pop();
        while (!this.stackTwo.empty()) {
            this.stackOne.push(this.stackTwo.pop());    
        }
        return temp;
    }
}

let queueStack = new QueueStack();
console.log(queueStack.empty());
queueStack.add('a');
queueStack.add('b');
queueStack.add('c');
queueStack.add('d');
console.log(queueStack.peek());
console.log(queueStack.remove());
console.log(queueStack.peek());

