const data = [5,1,2,9,7,3,8];

let temp = data[0];
for(let item of data) {
    if(item > temp) {
        temp = item;
    }
    return temp;
}
