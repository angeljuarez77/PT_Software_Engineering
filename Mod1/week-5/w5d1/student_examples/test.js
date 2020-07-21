let hotelCalifornia = {
    name: 'Hotel California',
    location: 'California',
    rating: 4,
    vacancies: true,
    tags: [
        'pink champagne',
        'wine',
        'lovely',
        'can\'t leave'
    ],
    rooms: [{
            'roomNumber': 102,
            'size': 'Queen Double',
            'price': 55,
            'booked': true
        },
        {
            'roomNumber': 202,
            'size': 'King Suite',
            'price': 68,
            'booked': false
        },
        {
            'roomNumber': 404,
            'size': 'Queen Double',
            'booked': false
        }
    ],
  whatIsTheName: function() {
    console.log('This hotels name is...' + hotelCalifornia.name)
  }
};

// hotelCalifornia.whatIsTheName();

// class Person {
//   constructor(nameParam, ageParam, eyesParam, hairParam) {
//     this.leg = 2;
//     this.arms = 2;
//     this.name = nameParam;
//     this.age = ageParam;
//     this.eyes =eyesParam;
//     this.hair = hairParam;
//     this.hobby = 'code';
//   }
//
//   greet(name) {
//     console.log("I am greeting " + name);
//   }
//
//   stateNumOfArm() {
//     console.log("I have " + this.arms);
//   }
//
// }
class Person {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs = false) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherPerson) {
    console.log('hi ' + otherPerson + '!');
  }
  classyGreeting (otherClassyPerson) {
    console.log('Greetings ' + otherClassyPerson.name + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  walk () {
    console.log('I hate when my Segway is in the shop.');
  }

  getName() {
    return this.name;
  }
}

class Doctor extends Person {
  cycle() {
    super.walk();
    console.log("I am walking to another patient")
  }
  diagnose() {
    console.log('I have diagnosed. That\'ll be $8k');
  }
  stateYourName() {
    console.log("My name is Dr." + super.getName())
  }
}

class Surgeon extends Doctor {
  surgery() {
    console.log('I have performed surgery');
  }
}

const me = new Person('Angel', 21, 'brown', 'i think also brown', undefined, true);
const someoneElse = new Person('Jose', 24, 'light brown', 'brown');

const supermanPerson = new Person('Clark Kent', 30, 'blue', 'black');
console.log(supermanPerson);
// supermanPerson.diagnose();

const drHouse = new Doctor('House', 2000, 'idk', 'blakc')
console.log(drHouse);
// drHouse.diagnose();
// drHouse.cycle();
// drHouse.sayYourName();
// drHouse.surgery();
drHouse.stateYourName();

const drMurphy = new Surgeon('Murphy', 21, 'brown', 'brown');
console.log(drMurphy);
drMurphy.diagnose();
drMurphy.surgery();

// console.log(me.hobby) // code
// me.setHobby('Sekiro');
// console.log(me.hobby) // Sekiro
// const animal = new Animal();
// console.log(someoneElse);
// console.log(me.leg);
// me.greet(1234);
// me.stateNumOfArm();
// someoneElse.stateNumOfArm();

// console.log(someoneElse);
// someoneElse.greet('Jose');

// [1, 2, 3, 4].map(x => {
//
// });

