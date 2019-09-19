'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
class FleetOfThings {
    main() {
        this.fleet = new Fleet();
        let milk = new Thing('Get milk');
        let obstacles = new Thing('Remove the obstacles');
        let stand = new Thing('Stand up');
        let lunch = new Thing('Eat lunch');
        stand.complete();
        lunch.complete();
        this.fleet.add(milk);
        this.fleet.add(obstacles);
        this.fleet.add(stand);
        this.fleet.add(lunch);
    }

    print() {
        for (let i = 0; i < this.fleet.getThings().length; i++) {
            let x = ' '
            if (this.fleet.getThings()[i].getCompleted()) {
                x = 'x'
            }
            console.log(`${i+1}. [` + x + `] ` + this.fleet.getThings()[i].getName())
        }
    }
}

let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
fleetOfThings.print();

// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well