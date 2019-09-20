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
        number -= (this.maxAmmo - this.currentAmmo);
        return number;
    }

    getType() {
        console.log(this.type);
    }

    getStatus() {
        console.log(`Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currentAmmo*this.baseDamage}`)
    }

    isPriority() {
        return this.type === 'F35' ? ture : false;
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
        this.carrier.forEach(element => element.refill(this.storeAmmo));
    }

    fight(carrier) {
        this.allDamage = 0;
        this.carrier.forEach(element => { this.allDamage += element.fight()});
        (carrier.healthPoint - this.allDamage) > 0 ? carrier.healthPoint -= this.allDamage : carrier.healthPoint = 0;
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
let carrier1 = new Carrier(200, 1000);

carrier.add('F16');
carrier.add('F16');
carrier.add('F35');

carrier1.add('F16');
carrier1.add('F16');
carrier1.add('F35');
carrier1.add('F35');
carrier1.add('F35');

carrier.getStatus();

carrier1.fight(carrier);

carrier1.fill();

carrier.getStatus();
carrier1.getStatus();