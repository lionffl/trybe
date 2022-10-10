"use strict";
class Dog {
    constructor(race, name, age) {
        this.race = race;
        this.name = name;
        this.age = age;
    }
    walk() {
        return console.log(`${this.name} is walking...`);
    }
    bark() {
        return console.log(`${this.name} is barking...`);
    }
}
class Guard extends Dog {
    fight() {
        return console.log(`${this.name} is fighting...`);
    }
}
const dog1 = new Dog('poodle', 'bob', 8);
const dog2 = new Guard('rotweiler', 'rex', 10);
dog1.bark();
dog2.fight();
