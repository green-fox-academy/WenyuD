const array = ['bread', 'milk', 'orange', 'tomato'];
const action = ['Up', '>', 'X', 'Down'];

let leftContainer = document.querySelector('body').appendChild(document.createElement('table'));
for(let i = 0; i < array.length; i++) {
    let newRow = document.createElement('tr');
    newRow.textContent = array[i];
    newRow.setAttribute('onClick', 'getFocus(this)');
    newRow.setAttribute('style', 'cursor: pointer');
    newRow.id = i;
    leftContainer.appendChild(newRow);
}
leftContainer.setAttribute('style', 'display: flex; flex-direction: column; border: 1px solid black; width: 5em; margin: 2em');

let buttonContainer = document.querySelector('body').appendChild(document.createElement('table'));
for(let i = 0; i < action.length; i++) {
    let newRow = document.createElement('button');
    newRow.textContent = action[i];
    newRow.setAttribute('style', 'cursor: pointer');
    buttonContainer.appendChild(newRow);
}
buttonContainer.setAttribute('style', 'display: flex; flex-direction: column; width: 5em; margin: 2em');

let rightContainer = document.querySelector('body').appendChild(document.createElement('table'));
rightContainer.setAttribute('style', 'display: flex; flex-direction: column; border: 1px solid black; width: 5em; margin: 2em');

// add selected feature for tr
leftContainer.firstChild.setAttribute('class', 'focus');
let currentFocus = leftContainer.firstChild;
function getFocus(element) {
    if (!element.classList.contains('focus')) {
        currentFocus.classList.remove('focus');
        element.classList.add('focus');
        currentFocus = element;
    }
}

// Up
buttonContainer.firstChild.setAttribute('onClick', 'Up()');
function Up() {
    if (leftContainer.childElementCount === 0) {
        alert('The list is empty!');
    } else if (currentFocus.id !== '0') {
        let temp = currentFocus.textContent;
        let tempID = parseInt(currentFocus.id);
        currentFocus.textContent = document.getElementById(tempID-1).textContent;
        document.getElementById(tempID-1).textContent = temp;
        document.getElementById(tempID-1).onclick();
    }
}

// Down
buttonContainer.lastChild.setAttribute('onClick', 'Down()');
function Down() {
    if (leftContainer.childElementCount === 0) {
        alert('The list is empty!');
    } else if (currentFocus.id !== (leftContainer.childElementCount -1).toString()) {
        let temp = currentFocus.textContent;
        let tempID = parseInt(currentFocus.id);
        currentFocus.textContent = document.getElementById(tempID+1).textContent;
        document.getElementById(tempID+1).textContent = temp;
        document.getElementById(tempID+1).onclick();
    }
}

// Remove
buttonContainer.childNodes[2].setAttribute('onClick', 'Remove()');
function Remove() {
    if (leftContainer.childElementCount === 0) {
        alert('The list is empty!');
    } else {
        let tempID = parseInt(currentFocus.id);
        currentFocus.remove();
        for(let i = tempID; i < leftContainer.childElementCount; i++) {
            leftContainer.childNodes[i].id = parseInt(i);
        }
        currentFocus = leftContainer.childNodes[0];
        currentFocus.onclick();    
    }
}

// Move
buttonContainer.childNodes[1].setAttribute('onClick', 'Move()');
function Move() {
    if (leftContainer.childElementCount === 0) {
        alert('The list is empty!');
    } else {
        let temp = document.createElement('tr');
        temp.textContent = currentFocus.textContent;
        rightContainer.appendChild(temp);
        buttonContainer.childNodes[2].onclick();
    }
}