// Post-it
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
class PostIt {
    constructor(backgroundColor = '', text = '', textColor = '') {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
const orange = new PostIt('orange', 'Idea 1', 'blue')
// a pink with black text: "Awesome"
const pink = new PostIt('pink', 'Awesome', 'black')
// a yellow with green text: "Superb!"
const yellow = new PostIt('yellow', 'Superb!', 'green')