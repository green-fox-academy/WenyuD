'use strict';
import LinkedList from './Interfaces/LinkedList';
import {newNode} from './Interfaces/Node';

class NodeList implements LinkedList{
    listSize: number;
    head: newNode;
    constructor() {
        this.listSize = 0;
        this.head = null;
    }

    add(value: string, index?: number) {
        if (index < 0 || index >= this.listSize) {
            console.log('Index does not valid.');
        } else if (this.listSize === 0) {
            this.head = new newNode(value);
        } else {
            let currentNode = this.head;
            for (let i = this.listSize; i > 1; i--) {
                currentNode = currentNode.next;
            }
            currentNode.next = new newNode(value);
        }
        this.listSize ++;
    }

    get(index: number) {
        let getNode = this.head;
        if (index < 0 || index >= this.listSize) {
            return 'Index does not valid.';
        } else {
            for (let i = 0; i < index; i++) {
                getNode = getNode.next;
            }
            return getNode.value;    
        }
    }

    removeItem(value: string) {
        let removeNode = this.head;
        let removedNode = null;
        if (removeNode.value === value) {
            this.head = removeNode.next;
            this.listSize--;
        } else {
            for (let i = 0; i < this.listSize-1; i++) {
                if(removeNode.next.value === value) {
                    removedNode = removeNode.next.value;
                    removeNode.next = removeNode.next.next;
                    this.listSize--;
                    break;
                }
            }
            if (removedNode === null) {
                console.log('This value does not exist.');
            }    
        }
    }

    remove(index: number) {
        let removeNode = this.head;
        let removedNode;
        if (index < 0 || index >= this.listSize) {
            console.log('This index does not exist.');
        } else {
            for (let i = 0; i < index-1; i++) {
                removeNode = removeNode.next;
            }
            removedNode = removeNode.next;
            removeNode.next = removeNode.next.next;
            this.listSize--; 
        }
        return removedNode;
    }

    size() {
        return this.listSize;
    }
}

let nodeList = new NodeList();
console.log('---------Add--------');
nodeList.add('a');
nodeList.add('b');
nodeList.add('c');
nodeList.add('d');
console.log(nodeList.size());
console.log('---------Get--------');
console.log(nodeList.get(10));
console.log(nodeList.get(1));
console.log('---------remove--------');
nodeList.remove(1);
console.log(nodeList.get(1));
console.log('---------remove item--------');
nodeList.removeItem('a');
console.log(nodeList.get(1));
nodeList.removeItem('d');
nodeList.removeItem('f');
console.log(nodeList.size());