function primitiveFields(obj) {
    let result = [];
    for (let key of Object.keys(obj)) {
        if (obj[key] !== Object(obj[key])) {
            result.push(key);
        }
    }
    return result;
};

console.log(primitiveFields({ x: 1, y: true, z: [] }));