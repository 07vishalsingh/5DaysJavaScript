// ** << Basics of js Starts here >>  **

//* Declare a variable named 'baby' and assign a string value

let baby = "Hello, sweety!";
// Display the value of the variable in the "console"

console.log(baby);

//* update the variable with a new value */

baby = " You ruined my life!";
// Display the update value
console.log(baby);

// ** Numbers **
const a = 5;
let b = 3.14;
let sum = a + b;
console.log("Sum:", sum);

// ** Booleans **
let isTrue = true;
let isFalse = false;
console.log("Boolean values:", isTrue, isFalse);

// ** Objects **
let human = {
  name: "Ayushi",
  age: 22,
  isLover: true,
};
console.log("Human's age:", human.age);
console.log("Human's isLover:", human.isLover);

// ** strings **
let firstName = "Vishal";
let lastName = "Singh";
let fullName = firstName + "" + lastName;
console.log("Full Name:", fullName);

// ** Arrays **
let numbers = [1, 2, 3, 4, 5];
let fruits = ["mango", "apple", "banana"];
console.log("Array elements:", numbers[2], fruits.length);

// ** undefined and null **
let undefinedVariable;
let nullValue = null;
console.log("Undefined variable:", undefinedVariable);
console.log("Null value", nullValue);

// ** constants **
const gravity = 9.81;
// we cant reassign a constant
console.log("Gravity:", gravity);

// ** Template Litrals **
let product = "Pizaa";
let price = 99.99;
console.log(`The ${product}`);
console.log(`costs ${price}`);

// ** << Basics of js Ends here >>  **



// * var
// * data types
// * arrays and objects
// win prediction game

//* var, let and const
// code => keyword

// var

// let email = 'vish@gmail.com'
// email = 'vishal@gmail.com'
//* console.log(email)

// var
// data types
// arrays and objects
// win prediction game

// var, let and const
// code => keyword

// var

// let email = 'vish@gmail.com'
// email = 'vish@codekaro.in'
// console.log(email)

// data types => string, numbers, boolean, arrays and objects
let userName = "vishal";
// string => '', ""
let age = -24.6;
let isUserActive = true;
// console.log(typeof isUserActive)

// array => amazon, flipkart, myntra, => wishlist

// let item1 = 'milk'
// let item2 = 'bread'
// let item3 = 'butter'

let items = ["milk", "bread", "butter"];
//items = ['panner','samosa','litti']
// console.log(items);
// items.push('apple')
// items.pop();
// splice(index, deleteCount, add new values(optional))

items.splice(1, 0, "apple", "coffee");
// console.log(items)

// objects
// let user = {
//     name: 'yash',
//     address: 'allahabad',
//     age: 24,
//     salary: 45000,
//     hobbies: ['cooking', 'reading books', 'watching movies']
// }
// user.name = 'yash goel';
// user.pin = 211003;
// delete user.salary;
// console.log(user.hobbies[0])

let users = [
  { name: "yash", email: "yash@gmail.com" },
  { name: "yash", email: "yash@gmail.com" },
  { name: "nayan", email: "nayan@gmail.com" },
  { name: "himanshu", email: "himanshu@gmail.com" },
  { name: "pawan", email: "pawan@gmail.com" },
  { name: "neha", email: "neha@gmail.com" },
  { name: "kavya", email: "kavya@gmail.com" },
  { name: "thulasi", email: "thulasi@gmail.com" },
  { name: "sathya", email: "sathya@gmail.com" },
  { name: "dhawal", email: "dhawal@gmail.com" },
  { name: "tisha", email: "tisha@gmail.com" },
];
let random = Math.floor(Math.random() * users.length);

console.log(users.length);
console.log(users[random].name);
