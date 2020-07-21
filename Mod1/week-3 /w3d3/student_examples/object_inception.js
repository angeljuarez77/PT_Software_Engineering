// const adventurer = {
//   name: "Timothy",
//   hitpoint: 10,
//   weapons: ['sword', 'potion', 'Tums']
// }

// console.log(adventurer.name);
// console.log(adventurer.weapons);
// console.log(adventurer.weapons[2]);

const arr  = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[3]);

/*
 * How do we loop over an array inside of an object???
 * Well first we access our array
 * in our case it's inside of the adventurer.weapons property
 * so adventurer.weapons is our array
 *
 * How do we loop over an array?
 * Note: Just because an array is inside of the object doesn't make it behave any differently
 *  Steps to loop over array:
 *    1) start from index 0
 *        for(let i = 0)
 *    2) add your conditional
 *        for(let i = 0; i < array.length)
 *    3) increment
 *        for(let i = 0; i < array.length; i++) {
 *        }
 *    4) Decide what to do with your value
 *        for(let i = 0; i < array.length; i++) {
 *          console.log(array[i]); // this should output the element inside of the variable called array
 *        }
 *
 * So all the steps are basically just the same. The only steps that change are 3 and 4
 * And not by much
 *
 * array = adventurer.weapons
*/

// for(let i = 0; i < adventurer.weapons.length; i++) {
//   console.log(adventurer.weapons[i]);
// }

// const adventurer = {
//   name: "Timothy",
//   hitpoint: 10,
//   weapons: ['sword', 'potion', 'Tums'],
//   companion: {
//     name: "Velma",
//     type: "Bat",
//     companion: {
//       name: "Tim",
//       type: "parasite",
//       belongings: ["scuba tank", "Rogan Josh", "health insurace"]
//     }
//   }
// }

// console.log(adventurer.companion.name); // Velma
// console.log(adventurer.companion.type);

// console.log(adventurer.name); // Timothy
// adventurer.name = "Angel";
// console.log(adventurer.name); // Angel

// console.log(adventurer.companion.name); // Velma
// adventurer.companion.name = "Susan";
// console.log(adventurer.companion.name); // Susan

// adventurer.companion2 = {
//   name: "Companion 2",
//   type: "insect"
// }

/// console.log(adventurer.companion.companion); // The entire Tim object
/// console.log(adventurer.companion.companion.name) // Tim
/// console.log(adventurer.companion.companion.type) // Parasite

// console.log(adventurer.companion.companion.belongings);
// console.log(adventurer.companion.companion.belongings[2]);
// how do we reasssign values in array?
//    access index
//    arr[i] = something
// adventurer.companion.companion.belongings[2] = {
//   name: "health insurance",
//   price: "too damn high"
// }

// console.log(adventurer.companion.companion); // the object which is a parasite

// const facebookUserAngel = {
//   password: 'asdfkjasdjasdf',
//   username: "Angel",
//   email: "angeljuarez729@gmail.com"
// }

// const facebookUser = {
//   password: 'new password',
//   username: "Jose",
//   email: "joses email",
//   friends: [
//     {
//       someuser: 'someone',
//       photos: [
//         {
//           imageSource: 'link',
//           comments: [
//             {
//
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   likes: [
//     {
//
//     }
//   ]
// }

// const posts = [ { link: 'link', user: 'Angel', datePosted: "12" } ]

const movies = [
  { title: "Tokyo Story" },
  { title: "Paul Blart: Mall Cop" },
  { title: "L'Avventura" }
]

// console.log(movies);

// for(let i = 0; i < movies.length; i++) {
//   console.log(movies[i]); // equal to an object at some point
//   console.log(movies[i].title);
// }

// movies[0] = { title: "tokyo story" }
// console.log(movies[0].title)
//
//
const wines = [
  {
    "id": 6282,
    "name": "CHATEAU DE SAINT COSME",
    "year": 2009,
    "grapes": "Grenache / Syrah",
    "country": "France",
    "region": "Southern Rhone",
    "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg",
    "price": 13,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:51.955Z",
    "updated_at": "2020-06-06T06:52:51.955Z"
  },
  {
    "id": 6283,
    "name": "LAN RIOJA CRIANZA",
    "year": 2006,
    "grapes": "Tempranillo",
    "country": "Spain",
    "region": "Rioja",
    "description": "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/lan_rioja.jpg",
    "price": 21,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:51.980Z",
    "updated_at": "2020-06-06T06:52:51.980Z"
  },
  {
    "id": 6284,
    "name": "MARGERUM SYBARITE",
    "year": 2010,
    "grapes": "Sauvignon Blanc",
    "country": "USA",
    "region": "California",
    "description": "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/margerum.jpg",
    "price": 25,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:51.994Z",
    "updated_at": "2020-06-06T06:52:51.994Z"
  },
  {
    "id": 6285,
    "name": "OWEN ROE \"EX UMBRIS\"",
    "year": 2009,
    "grapes": "Syrah",
    "country": "USA",
    "region": "Washington",
    "description": "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Dont miss this award-winning taste sensation.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/ex_umbris.jpg",
    "price": 15,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:52.004Z",
    "updated_at": "2020-06-06T06:52:52.004Z"
  },
  {
    "id": 6286,
    "name": "REX HILL",
    "year": 2009,
    "grapes": "Pinot Noir",
    "country": "USA",
    "region": "Oregon",
    "description": "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/rex_hill.jpg",
    "price": 32,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:52.012Z",
    "updated_at": "2020-06-06T06:52:52.012Z"
  },
  {
    "id": 6287,
    "name": "VITICCIO CLASSICO RISERVA",
    "year": 2007,
    "grapes": "Sangiovese Merlot",
    "country": "Italy",
    "region": "Tuscany",
    "description": "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/viticcio.jpg",
    "price": 45,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:52.029Z",
    "updated_at": "2020-06-06T06:52:52.029Z"
  },
  {
    "id": 6288,
    "name": "CHATEAU LE DOYENNE",
    "year": 2005,
    "grapes": "Merlot",
    "country": "France",
    "region": "Bordeaux",
    "description": "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/le_doyenne.jpg",
    "price": 12,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:52.046Z",
    "updated_at": "2020-06-06T06:52:52.046Z"
  },
  {
    id: 6289,
    name: "DOMAINE DU BOUSCAT",
    "year": 2009,
    "grapes": "Merlot",
    "country": "France",
    "region": "Bordeaux",
    "description": "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
    "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/bouscat.jpg",
    "price": 34,
    "instance_id": "946b48",
    "created_at": "2020-06-06T06:52:52.066Z",
    "updated_at": "2020-06-06T06:52:52.066Z"
  }
];

// for(let i = 0; i < wines.length; i++) {
//   // console.log(wines[i].name);
//   if(wines[i].name === "some other wine name") {
//     console.log(wines[i].name);
//     console.log('We do have it');
//   }
// }

const monster = {
  name: "Slimer",
  age: 6
}

/// console.log(monster.name);
/// console.log(monster['name']);

const str = 'name';
// console.log(monster[str]);

const movie = {
  title: "L'Avventura",
  director: "Michelangelo Antonioni",
  year: 1960
}

// for (variable in object)
//   statement

// for(let i = 0; i < arr.lengh; i++) {
//   arr[i];
// }

// for(key in movie) {
//   console.log(movie[key]);
// }

// const arrOfKeysInsideOfAdventurer = Object.keys(adventurer);

/// for(let i = 0; i < arrOfKeysInsideOfAdventurer.length; i++) {
///   // console.log(arrOfKeysInsideOfAdventurer[i]);
///   console.log( adventurer[arrOfKeysInsideOfAdventurer[i]] );
/// }
  //


const adventurer = {
  name: "Timothy",
  hitpoint: 10,
  weapons: ['sword', 'potion', 'Tums'],
  companion: {
    name: "Velma",
    type: "Bat",
    nestedCompanion: {
      name: "Tim",
      type: "parasite",
      belongings: ["scuba tank", "Rogan Josh", "health insurace"]
    }
  }
}

for(property in adventurer) {
  console.log(property); // this will console log the name of each property inside of our adventurer obj
  console.log(adventurer[property]); // this uses that property (which is a string) to access our objects key-value pairs
}

for(key in adventurer.companion) {
  if(key === 'name') {
    console.log('we dont say names')
  } else {
    console.log(adventurer.companion[key]);
  }
}
