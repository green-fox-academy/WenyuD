const handler = {
    get: function (targetObject, field) {
        if (field === 'nextId') {
            if (targetObject[field] === undefined) {
                return targetObject[field] = 1;
            } else {
                return targetObject[field] += 1;
            }
        } else {
            return undefined;
        }

    }
};
const proxyObject = new Proxy({}, handler);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextClass);