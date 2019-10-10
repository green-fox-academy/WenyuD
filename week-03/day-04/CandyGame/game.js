// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let createCandies = document.querySelector('.create-candies');
let candiesDisplay = document.querySelector('.candies');
let buyLollypops = document.querySelector('.buy-lollypops');
let lollypopsDisplay = document.querySelector('.lollypops');
let candyRain = document.querySelector('.candy-machine');
let speed = document.querySelector('.speed');
let candies = 0;
let candyRainSpeedUp = false;


createCandies.addEventListener('click', () => {
    candies += 100;
    candiesDisplay.textContent = candies;
})
buyLollypops.addEventListener('click', () => {
    if (candies < 100) {
        alert('You need at least 100 candies to buy a lollipop!')
    } else {
        candies -= 100;
        candiesDisplay.textContent = candies;
        lollypopsDisplay.textContent += '🍭';
    }
})
candyRain.addEventListener('click', () => {
    candyRainSpeedUp = true;
})

// 10 lollipops generate 1 candy per second.
let temp = 0;
let generateCandies = 0;

window.onload = () => {
    setInterval(() => {
        let lollypops = lollypopsDisplay.textContent.length/2;
        generateCandies = Math.floor(lollypops / 10);
        console.log(generateCandies);
        
        if (candyRainSpeedUp === true) {
            generateCandies *= 10;
        }
        candies += generateCandies;
        candiesDisplay.textContent = candies;

        // calculate and display candy producton rate
        let candiesIncrease = parseInt(candiesDisplay.textContent) - temp;
            setTimeout(() => {
                temp = parseInt(candiesDisplay.textContent);
            }, 1000);
        speed.textContent = candiesIncrease;
    }, 1000);
}