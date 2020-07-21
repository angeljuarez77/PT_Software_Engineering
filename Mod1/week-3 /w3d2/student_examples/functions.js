const car = {
  year: 1989,
  tires: "michellin",
  color: "blue",
  horsepower: 4000,
}

console.log(car); // the entire obj
console.log(
  car.color
); // blue

console.log(car["who gave it to me"]) // mother
console.log(car["horsepower"]); // 4000

const arr = [1,2,3,4,5,6];
console.log(arr);

arr.push(12);

console.log(arr);

// I want to add license plate number
car.licensePlate = "1X44V6";
console.log(car);

car.year = 20000000000000;
console.log(car);


const house = {
  doors: 9,
  windows: null,
};

let i;
console.log(i, "the i value");
console.log(house.windows);

house.windows = 30;

console.log(house);

house.hasGarden = true;

console.log(house);

const sister = {
  name: "name",
  age: "age"
}
const mother = {
  name: "mother",
  age: "idk"
}
const me = {
  name: "angel",
  age: 21
}
house.whoLivesHere = [sister, mother, me];
console.log(house);

house.whoLivesHere[1].name = 'mom';

const metrocard = {
  balance: 20,
  expiry: 12,
  singleRide: false
}

const fare = 2.75;

if(fare /* 2.75 */ > metrocard.balance /* 20 */) {
  console.log('you can\'t afford it');
} else {
  console.log("get on the train");
}

const person = {
  name: 'angel',
  position: "Instructor",
}

if(person.position === "student") {
  console.log('use phone in class');
} else {
  console.log('continue grading the homework')
}

console.log(person.status, "person.status");

if(undefined) {
  console.log('the thing inside of the parentheses was truthy');
} else {
  console.log('the thing inside ot the parentheses was falsey');
}

if(person.status /* undefined */) {
  console.log('the thing inside of the parentheses was truthy');
} else {
  console.log('the thing inside ot the parentheses was falsey');
}

console.log(person.status === undefined);


const obj = {
  key: 'value',
  property: 'another value',
  age: 21,
  boolean: false,
  arrayInsideOfObj: [1,2,3]
}

console.log(obj)
console.log(obj.age);
console.log(obj.arrayInsideOfObj);

obj.age = 220000000000000;
console.log(obj)

obj.newProperty = 'I am a new property';
console.log(obj);