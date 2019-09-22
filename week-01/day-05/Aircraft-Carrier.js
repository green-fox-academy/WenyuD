'use strict';

class Aircraft {
    constructor (type, maxAmmo, baseDamage) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;

        this.type === 'F16' ? (this.maxAmmo = 8, this.baseDamage = 30) : (this.maxAmmo = 12, this.baseDamage = 50);

        this.currentAmmo = this.maxAmmo;
        this.damage = this.maxAmmo * this.baseDamage;
    }

    fight() {
        this.currentAmmo = 0;
        return this.damage;
    }

    refill(number) {
        //refill only when the storedAmmo > 0
        if (number > 0) {
            if (number - (this.maxAmmo - this.currentAmmo) >= 0) {
                number -= (this.maxAmmo - this.currentAmmo);
                this.currentAmmo += this.maxAmmo - this.currentAmmo;
            } else if (number - (this.maxAmmo - this.currentAmmo) < 0){
                this.currentAmmo = number;
                number = 0;
            }
        }
        return number;
    }

    getType() {
        console.log(this.type);
    }

    getStatus() {
        console.log(`Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currentAmmo*this.baseDamage}`)
    }

    isPriority() {
        return this.type === 'F35';
    }
}

class Carrier {
    constructor (storeAmmo, healthPoint) {
        this.storeAmmo = storeAmmo;
        this.healthPoint = healthPoint;
        this.carrier = [];
    }

    add(type) {
        this.carrier.push(new Aircraft(type))
    }

    fill() {
        //fill F35 first
        this.carrier.forEach(element => {
            if (element.isPriority()) {
                this.storeAmmo = element.refill(this.storeAmmo);
            }
        })
        //this.carrier.filter(element => element.isPriority()).forEach(element => this.storeAmmo = element.refill(this.storeAmmo));
        //fill F16 when storeAmmo > 0
        if (this.storeAmmo > 0) {
            this.carrier.filter(element => !element.isPriority()).forEach(element => this.storeAmmo = element.refill(this.storeAmmo));
        }
    }

    fight(carrier) {
        this.allDamage = 0;
        //if this carrier already dead then it won't be able to fight
        if (this.healthPoint === 0) {
            console.log('You are dead :(');
        } if (carrier.healthPoint === 0) {
            console.log('It\'s dead Jim :(');
        } else {
            this.carrier.forEach(element => { this.allDamage += element.fight()});
            (carrier.healthPoint - this.allDamage) > 0 ? carrier.healthPoint -= this.allDamage : carrier.healthPoint = 0;
        }
    }

    getStatus() {
        console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.carrier.length}, Ammo Storage: ${this.storeAmmo}, Total damage: ${this.allDamage}\nAircrafts: \n`)
        this.carrier.forEach(element => {
            console.log(`Type: ${element.type}, Ammo: ${element.maxAmmo}, Base Damage: ${element.baseDamage}, All Damage: ${element.damage}`)
        });
        if (this.healthPoint === 0) {
            console.log('It\'s dead Jim :(');
        }
    }
}

let carrier = new Carrier(300, 2000);
let carrier1 = new Carrier(30, 3000);

carrier.add('F16');
carrier.add('F16');
carrier.add('F35');

carrier1.add('F16');
carrier1.add('F16');
carrier1.add('F35');
carrier1.add('F35');
carrier1.add('F35');


carrier1.fight(carrier);
carrier.fight(carrier1);

//carrier1.getStatus();
carrier1.fill();

console.log(carrier1);

//carrier.getStatus();
//carrier1.getStatus();