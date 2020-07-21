// setTimeout( () => {
//   console.log('oh... hai');
// }, 4000 )

function sayHello() {
  console.log('from say hello');
}

// setTimeout(sayHello, 4000);

const socky = () => {
  console.log('I will happily iron your socks!');
}

const foodie = () => {
  console.log('I will sort your MMs so that you never encounter a green one!');
}

const pr = () => {
  console.log('I will make sure everyone knows you are the best boss ever');
}

// setTimeout(socky, 4000);
// foodie();
// pr();

function boss(func /*pr*/) {
  func(); // pr(); // foodie();
  console.log("I am a cool boss");
}

// boss(pr);
// boss(foodie);
// boss(socky);
// boss(() => {
//   console.log("I am an anon function;");
// })

const capitalize = word => {
  return word[0].toUpperCase() + word.substring(1);
}

// console.log(capitalize('hello'));

function takeCall(caps) {
  const name = "angel";
  const capsedName = caps(name); // return a string with first letter capitalized
  console.log(capsedName);
}

// takeCall(capitalize);

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const testFunction = () => {
  console.log('hello')
  return 1;
};

function logGivenParam(item) {
  console.log(item);
}

// bondFilms.map(film => {
//   console.log(film.actor)
//   console.log(film.gross)
// });
//
// for(let i = 0; i < bondFilms.length; i ++) {
//   console.log(bondFilms[i].actor, 'for loop')
//   console.log(bondFilms[i].gross, 'for loop')
// }

const arr = [1, 2, 3, 4];
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
//
// for(let num = 0; num < arr.length; num++) {
//    console.log(arr[num]);
// }
// console.log(arr.map(i => i +=2));
const strings = ['hello', 'goodbye', 'somethin'];
// strings.map(i => console.log(i));
//
// we want to log in to a page
//  we first need the user information
//    we get name, address, jwt
//
//    when we get the info => say hello to them
//    if we don't eve get the information => tell the user that nothing happened
//
function getAngel() {
  const user = {
    name: "Angel",
    password: "password",
    height: "height",
    token: "jwt"
  }

  const secondUser = {
    name: "second"
  }

  return secondUser;
};

function getJose() {
  const user = {
    name: "Jose",
    password: "password",
    height: "height",
    token: "jwt"
  }

  return user;
}

function somethingUseles() {
  console.log("I don't really do anything");
}

function anotherUselessFunction() {
  console.log("for the sake of the exmaple");
}

function logIn(userfunction, uselessthing) {
  console.log("hello here is a log in form");
  const user = userfunction();
  uselessthing();
  console.log(user.name);
}

// logIn(getAngel);
// logIn(getJose);

logIn(getAngel, somethingUseles);
logIn(getJose, anotherUselessFunction)

/*
 * click button
 * see new page
 * load icon
 *
 *  getInfo of problem
 *  once you get info
 *  display
 *
 *  display(loadIcon, getInfo) {
 *    const problems = [{ name: 'name of question', solved: false }]
 *    const problems = getInfo();
 *    if(problems.length > 0) {
 *      render problems
 *    } else {
 *      loadIcon()
 *    }
 *  }
*/

function newOne() {
  return 'hello';
}

console.log(newOne);
