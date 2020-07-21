const sayHello = "Hello I am Angel";
const num = 12;
const bool = true;
/*
console.log(typeof sayHello); // what dataype is it? -> string
console.log(typeof num); // what datatype is it? -> number
console.log(typeof bool); // what datatype is it? -> boolean
*/

const favFoods = ["string", 1, { hello: "hello" }];
/*
console.log(typeof [1, 2, 3, 4, 5]); // what datatype is it? -> array or arr
console.log( Array.isArray([1, 2, 3, 4, 5]) ); // what datatype is it? -> array or arr
console.log( Array.isArray(arr) ); // what datatype is it? -> array or arr
*/

/*
console.log(favFoods);
console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
*/

const ghostBusters = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Menitz", "Barrett", "Tully", "Angel", "Jose"];

/*
console.log(ghostBusters); // here we have jose as last
ghostBusters[0] = "Kimmy";
console.log(ghostBusters);
*/

/*
console.log(ghostBusters.length); // .length returns num of ELEMENTS NOT the num of indexes
console.log(ghostBusters[ghostBusters.length - 1]);
*/

const numbers = [21, 18, 5, 3, 2, 1, 1];
/*
numbers[2] = null;
console.log(numbers);

numbers[0] = numbers[0] * 10;
numbers[0] *= 10;
console.log(numbers);
*/

/*
console.log(numbers[6]);
console.log(numbers[2 * 3]);
console.log(numbers.length); // -> 7
console.log(numbers[numbers.length - 1 7 - 1 = 6 );
*/

const oddNumbered = ['first element', 'second element', 'third element'];
/*
console.log(oddNumbered);

console.log(oddNumbered[1]);
console.log(oddNumbered.length / 2);
console.log(Math.floor(oddNumbered.length / 2));
console.log(
    oddNumbered[Math.floor(oddNumbered.length / 2)]
);
*/

/*
const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"]; // 5 items so last index = 4

for(let iteratorNumber = 0; iteratorNumber < kitchenSink.length; iteratorNumber++) {
    console.log(iteratorNumber);
    console.log("This is my kitchen sink " + kitchenSink[iteratorNumber]);
}
*/

const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// iterate through every element in array and console log it
for (let i = 0; i < drSeuss.length; i++) {
    const element = drSeuss[i];
    console.log(element);
}

// only console log
for (let i = 0; i < drSeuss.length; i++) {
    // if(i % 2 === 0) this is the if statement/conditional to check for an even number
    if(i % 2 !== 0) {
        console.log(drSeuss[i]);
        console.log(i);
    }
}

/*
for (let i = 0; i < drSeuss.length; i++) {
    if(i % 2 !== 0) {
        const element = drSeuss[i];
        console.log(element);
    }
}
*/