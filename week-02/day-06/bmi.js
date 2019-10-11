function bmi(obj) {
    if (obj.height && obj.mass) {
        return obj.mass/(obj.height*obj.height);
    } else {
        return undefined;
    }
}

let myBMI = {mass: 50, height: 1.6};
console.log(bmi(myBMI));