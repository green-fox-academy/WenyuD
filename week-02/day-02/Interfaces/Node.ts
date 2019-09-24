class newNode {
    value: string;
    next: newNode;

    constructor(value: string, next: newNode = null) {
        this.value = value;
        this.next = next;
    }
}

export {newNode};