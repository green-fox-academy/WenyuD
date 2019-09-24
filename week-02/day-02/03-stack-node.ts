'use strict';
import Stack from './Interfaces/Stack';
import {newNode} from './Interfaces/Node';

class StackNode implements Stack {
    head: newNode;
    length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }

    empty() {
        return this.head === null;
    }

    peek() {
        return this.head.value;
    }

    push(value: string) {
        let lastNode = this.head;
        if (this.head === null) {
            this.head = new newNode(value);
        } else {
            for (let i = 0; i < this.length -1; i++) {
                lastNode = lastNode.next;
            }
            lastNode.next = new newNode(value);
        }
        this.length++;
    }

    pop() {
        let lastNode = this.head;
        for (let i = 0; i < this.length - 1; i++) {
            lastNode = lastNode.next;
        }
        let popedNode = lastNode.value;
        lastNode = null;
        this.length--;
        return popedNode;
    }
}

let stackNode = new StackNode();
console.log(stackNode.empty());
stackNode.push('a');
stackNode.push('b');
stackNode.push('c');
stackNode.push('d');
console.log(stackNode.peek());
console.log(stackNode.pop());