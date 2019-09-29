function setNumber() {
    this.numberList = [];
}

setNumber.prototype.add = function(value) {
    // before ES6
    // if (!this.numberList.includes(value)) {
    //     this.numberList.push(value);
    // }

    // updated
    if (!this.numberList.indexOf(value) !== -1) {
        this.numberList.push(value);
    }
}

setNumber.prototype.get = function(key) {
    if (key >= 0 && key < this.numberList.length) {
        return this.numberList[key];
    } else {
        return 'Index invalid.';
    }
}