'use strict';
import Tree from './Interfaces/Tree';
import BinaryTreeNode from './Interfaces/BinaryTreeNode';

class BinaryTree implements Tree {
    root: BinaryTreeNode;
    size: number;
    constructor() {
        this.root = null;
        this.size = 0;
    }

    empty() {
        return this.root === null;
    }

    add(value: string) {
        let temp = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = temp;
        } else {
            let current = this.root;
            while(current.nextLeft !== null) {
                current = current.nextLeft;
            }
            current.nextLeft = temp;
        }
        this.size++;
    }

    remove(value: string) {
        if (this.root === null) {
            console.log('This tree is empty.');
        } else if (this.root.data === value) {
            this.root = this.root.nextLeft;
        } else {
            let current = this.root;
            let parent = this.root;
            while(current !== null) {
                if (current.data === value) {
                    parent.nextLeft = current.nextLeft;
                    break;
                }
                parent = current;
                current = current.nextLeft;
            }
            this.size--;
        }
    }

    search(value: string) {
        if (this.root === null) {
            return false;
        } else {
            let current = this.root;
            while(current !== null) {
                if (current.data === value) {
                    return true;
                }
                current = current.nextLeft;
            }
            return false;
        }
    }
}

let binaryTree = new BinaryTree();
console.log(binaryTree.empty());
binaryTree.add('a');
binaryTree.add('b');
binaryTree.add('c');
binaryTree.add('d');
// console.log(binaryTree);
binaryTree.remove('d');
//binaryTree.print(binaryTree.root);
console.log(binaryTree.search(''));
