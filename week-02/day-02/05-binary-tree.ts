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

    
    // insert(node: BinaryTreeNode, value: string) {
    //     if (node.nextLeft !== undefined) {
    //         this.insert(node.nextLeft, value);
    //     } else {
    //         node.nextLeft = new BinaryTreeNode(value);
    //     }
    // }
    // delete(node: BinaryTreeNode, value: string) {
    //     if (node !== undefined && node.root !== value) {
    //         this.delete(node.nextLeft, value);
    //     } else if (node !== undefined && node.root === value) {
    //         node = node.nextLeft;
    //         this.size--;
    //     } else {
    //         return 'This value is not in the tree.';
    //     }
    // }
    // searchNode(node: BinaryTreeNode, value: string) {
    //     if (node !== undefined && node.root !== value) {
    //         this.searchNode(node.nextLeft, value);
    //     } else if (node.root === value){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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

    print(node: BinaryTreeNode): void{
        if(node.nextLeft !== null){
            this.print(node.nextLeft);
        }
        console.log(node.data);
        if(node.nextRight !== null){
            this.print(node.nextRight);
        }
    }

    remove(value: string) {
        if (this.root === null) {
            console.log('This tree is empty.');
        } else if (this.root.data === value) {
            this.root = this.root.nextLeft;
        } else {
            let current = this.root;
            let parent = current;
            let temp;
            while(current.nextLeft !== null) {
                if (current.data === value) {
                    parent = current.nextLeft;
                }
                parent = current;
                current = current.nextLeft;
            }
            this.size--;
        }
    }

    search(value: string) {
        return true;
        // if (this.empty()) {
        //     return false;
        // } else {
        //     let current = this.root;
        //     while(!current.nextLeft.empty()) {
        //         if (current.nextLeft.root !== value) {
        //             current = current.nextLeft;
        //         } else {
        //             return true;
        //         }
        //     }
        //     return false;
        // }
    }
}

let binaryTree = new BinaryTree();
console.log(binaryTree.empty());
binaryTree.add('a');
binaryTree.add('b');
binaryTree.add('c');
binaryTree.add('d');
// console.log(binaryTree);
binaryTree.remove('c');
binaryTree.print(binaryTree.root);
//console.log(binaryTree.search('b'));
