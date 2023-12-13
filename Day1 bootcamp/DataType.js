// ** primitive data type **

let numOne = 7;
let numTwo = 7;
console.log(numOne == numTwo);

let gf = "girlFriend";
let bf = "boyFriend";
console.log(gf == bf);

let food = "burger";
let sweet = "iceCream";
console.log(food == sweet);

// ** Non-primitive data type **

let fruits = ["mango", "apple", "banana", "coconut"];
fruits[1] = "guava";
console.log(fruits);

// ** two non-primitive**

let girlFriends = ["priya", "aliya", "aiyesha"];
let gfs = ["priya", "aliya", "aiyesha"];
console.log(girlFriends == gfs);

let girlFriendOne = {
  name: "Aaliya",
  role: "LovingOne",
  country: "England",
};
let girlFriendTwo = {
  name: "Aaliya",
  role: "LovingOne",
  country: "England",
};
console.log(girlFriendOne == girlFriendTwo);

let gfOne = {
  name: "Aaliya",
  role: "BoyfriendMaker",
  country: "England",
};
let gfTwo = gfOne;
console.log(gfOne == gfTwo);

// ** NUMBERS **

let age = 22;
const gravity = 9.81; // we use const for non-changing value
let mass = 71;
const pi = 3.14;
const boilingPoint = 100;
const bodyTemp = 37;
console.log(age, gravity, mass, pi, boilingPoint, bodyTemp);

// * Math object *

const PI = Math.PI;
console.log(PI);

// *Rounting to the closet number if above .5up if less 0.5 down*

console.log(Math.round(9.8));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
console.log(Math.min(8, -9, 1, -3, 7));
console.log(Math.max(0, 9, -4, 55));

const randNum = Math.random();
console.log(randNum);
const num = Math.floor(Math.random() * 11);
console.log(num);

// ** Absolute number **
console.log(Math.abs(-10));

// ** Square root **
console.log(Math.sqrt(100));

// ** power **
console.log(Math.pow(3, 2));
console.log(Math.E);

// ** Random number generator **

let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11;
console.log(numBtnZeroAndTen);
