const originalArray = [2, 4, 6, 8, 10];
const integer = 12;
const classArray = ['Javascript', 'HTML', 'CSS', 'Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];
const numberArray = [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

/*
 * Array methods in JS
 * .map -> this array method makes changes to the array you iterate on and returns a NEW array with those changes
 * .filter
 * .find
 * .findIndex
 * .forEach
 * .reduce
 * .some
 * .sort
*/

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];
/*
 * Here we see a .map method used on an array
 * so we want to interact with the array called iceCreams... so we choose iceCream.map()
 * what .map will do is loop through the array and modify/interact with it however you want
 * then the return value will be added to a new array
*/
const updatedIceCreams = iceCreams.map(flavor => {
  return flavor + 'hello';
});
/*
 * the .map method is basically the equivalent of this
 * for loop function below
*/
function forLoop(arrayParam) {
  /*
   * imagine item as the param inside of the callback within the .map method
   * newArray created in the background when you run a .map method
   * the .map method loops through the array it was tacked onto
   * the original array isn't changed at all
  */

  // .map creates a new array to add all of the information to
  const newArray = [];
  let item; // item is just for readability
  for(let i = 0; i < arrayParam.length; i++) {
    item = arrayParam[i]; // item is now going to be every individual element/index inside of the array
    newArray.push(item + 'a change'); // now the changed item is added to the newArray to not change the original array
  }

  return newArray; // finally we return the entire array
}

// console.log(updatedIceCreams, 'updatedIceCreams');
// .map loop
// const newArray = [];
// for(let i = 0; i < iceCreams.length; i++) {
//   newArray.push(iceCreams[i] + 'hello');
// }
// console.log(newArray, 'newArray');

// regular loop
// for(let i = 0; i < iceCreams.length; i++) {
//   console.log(iceCreams[i]);
//   iceCreams[i] += 'hello';
// }
// console.log(iceCreams, 'iceCreams array');

// let firstString = 'hello';
// const secondString = 'hea;sldkjfasdg;';
// firstString += secondString;
// console.log(firstString);
// iceCreams.forEach(flavor => {
//   return flavor += 'hello';
// });

// console.log(iceCreams, 'iceCreams arr after forEach');

const newNumArray = originalArray.map(elem => {

  return elem * 2;
});

// console.log(newNumArray);
// console.log(originalArray);

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sequenceModified = sequence.map(x => {
  console.log(x);
  if(x % 2 === 0) {
    return x * 1200;
  } else {
    return x;
  }
});

const anonFunc = function(param) {

}

anonFunc()

function functionName() {

}

functionName();

const arrowFunc = () => {

}

arrowFunc();

console.log(sequenceModified, sequence)

const string = 'angel';
console.log(string.charAt(0).toUpperCase() + string.slice(1));
