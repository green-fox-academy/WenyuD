function alien(arr1, arr2, numbers) {
    let aliens = [];
    let arr = arr1 + arr2;
    for(let item of numbers) {
        if (!arr.includes(item)) {
            aliens.push(item);
        }
    } 
    return aliens;
}

console.log(alien([2,2,21,1,4],[4,2,45,62,1],[2,3,5,2,99]));