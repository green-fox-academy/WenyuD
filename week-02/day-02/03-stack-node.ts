'use strict';
import Stack from './Interfaces/Stack';
import {newNode} from './Interfaces/Node';

class StackNode implements Stack {
    tail: newNode;
    length: number;
    constructor() {
        this.tail = null;
        this.length = 0;
    }

    empty() {
        return this.tail === null;
    }

    peek() {
        if (!this.empty()){
            return this.tail.value;
        } else {
            return null;
        }
    }

    push(value: string) {
        let temp = new newNode(value);
        temp.next = this.tail;
        this.tail = temp;
        this.length++;
    }

    pop() {
        if (!this.empty()) {
            let temp = this.tail.value;
            this.tail = this.tail.next;
            return temp;    
        } else {
            return null;
        }
    }
}

// let stackNode = new StackNode();
// console.log(stackNode.empty());
// stackNode.push('a');
// stackNode.push('b');
// stackNode.push('c');
// stackNode.push('d');
// console.log(stackNode.peek());
// console.log(stackNode.pop());
// console.log(stackNode.peek());

export default StackNode;