'use strict';

class BinaryTreeNode {
    data: string;
    nextLeft: BinaryTreeNode;
    nextRight: BinaryTreeNode;
    constructor(data?: string) {
        this.data = data;
        this.nextLeft = null;
        this.nextRight = null;
    }
}

export default BinaryTreeNode;