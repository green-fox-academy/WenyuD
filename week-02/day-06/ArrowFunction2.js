function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    // Write your code here
    multiPurposeFunction((firstName, lastName) => {
        if(firstName = '') {
            return firstName + ' ' + lastName;
        } else {
            return lastName;
        }
    })

    multiPurposeFunction(function (firstName, lastName){
        if(firstName = '') {
            return firstName + ' ' + lastName;
        } else {
            return lastName;
        }
    })
}

frameFunction();