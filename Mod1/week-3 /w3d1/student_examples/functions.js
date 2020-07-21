var angelsName = "Angel Juarez";

function sayHello() {
    var angelsNameToBeUsedDuringAPiCall = 'wrong person';
    console.log('hello I am angel');
}

// sayHello();

const sayHelloVar = function() {
    console.log('hello I am from inside the function expression');
}

// sayHelloVar();

const firstArrowFunction = () => {
    console.log('hello first arrow function');
}

// firstArrowFunction();

const printTriangle = () => {
    console.log('#')
    console.log("##")
    console.log('###')
    console.log('####')
    console.log('#####')
}

// printTriangle();

const printSum = () => {
    console.log(10 + 10);
}

// printSum();

function sayHi(name, lastname) {
    console.log("Hello, " + name);
}

const sayHiExpression = function(name, lastname) {
    console.log("Hello, " + name);
}

// if I have only one param. arrow functions don't need parens
const sayHiArrow = name => {
    console.log("Hello, " + name);
}

const sayHiArrowMultipleParam = (firstname, lastname) => {
    console.log("Hello, " + firstname + lastname);
}

// sayHiArrowMultipleParam('Angel', "juaprz");
// sayHiArrowMultipleParam('Jose', "Cruz");

// sayHiArrow('username');
// sayHiArrow('Jose');

function calculateArea(num1, num2) {
    console.log(num1 * num2);
}

function calculateArea(num1, num2) {
    return num1 * num2;
}

// console.log( calculateArea(31, 21) ); // -> 261
// console.log( calculateArea(2, 2) + 4 ); // -> 4
// console.log( calculateArea(12, 12) ) // -> 144


// console.log( add(2, 2) + 32 );

function checkInput(userInput) {
    if(userInput.length === 0) {
        return;
    }

    console.log(userInput);
}

function checkBalance(price, bankAccountBalance) {
    if(price > bankAccountBalance) {
        console.log('not enough money');
        return;
    }

    console.log("Yay you bought something")
}

checkInput(''); // nothing inside of search bar
checkInput('cupcakes');

// checkBalance(31, 700);
checkBalance(700, 31);

/*
 * create website
 * create front end
 *  angular
 *      I need services to call API
 *          I need my HttpMethod import module at app module
 *          I need to call HttpGet method
 *          where to find url
 *              proxy
 *          http.get(url)
 * create backend
*/

function notGlobalScope() {
    const josesName = 'Jose Cruz';
    console.log(angelsName, "inside of function");
    console.log(josesName, 'not global scope');
    function inner() {
        const bruceName = "Bruce Hawthorn";
        console.log(bruceName, 'inner function');
        console.log(josesName, 'inner function');
        console.log(angelsName, "inner function");
    }
    // console.log(bruceName);
    inner();
}

// console.log(josesName);
notGlobalScope();

function add(num1, num2) {
    return num1 + num2; // outputting 4 to console
}

function subtract(num1, num2) {
    return num1 - num2;
}

function addThenSubtract() {
    const addedNums = add(2,2); // -> 4
    const subtractedNums = subtract(addedNums, 3); // -> 1
    return subtractedNums;
}
console.log( addThenSubtract() );

function apiCall() {
    // we made api call
    // we got information about the user
    // we got their identification
    /// we got their key
    return key;
}

// const firstName = () => {
//     return "Angel";
// }
//
// const middleName = () => {
//     // return middle name
// }
//
// const fullName = () => {
//     return firstName() + " Juarez";
// }
//
// console.log( fullName() ); // Angel Juarez

const firstName = () => {
    return 'Bryan';
};
const middleName = () => {
    return ' Jermaine';
};
const fullName = () => {
    return firstName() + middleName() + ' Goolsby ';
};

console.log(fullName());

() => { return "bruce"
}() => {
    return "Sherwood"
} Hawthorn