let space = "";
let firstName = "Vishal";
let lastName = "Singh";
let fullName = firstName + " " + lastName;
let country = "India";
let city = "Saran";
let language = "JavaScript";
let role = "Developer";
let quote = "I am vishal singh and i am a javaScript developer";
console.log(fullName);

// * string contenation *

console.log(fullName);
console.log(quote);
let personInfoOne = fullName + " " + " " + "i live in" + " " + city;
console.log(personInfoOne);

// ** loong literals **
const paragraph =
  "Analyzing the problem statement means making the objective of the program clear in our minds like what the input is and what is the required output. Sometimes the problems are of complex nature, to make them easier.";
console.log(paragraph);

/* ** escape sequence in strings 
.\n: new line
.\t: tab space
.\\: back slash
*/

console.log(
  "I hope everyone is enjoying the 5 days of JavaScript challenge.\nDo you?"
);
console.log("Day1\tTopics\tExercises");
console.log("Day2\t3\t5");
console.log("Day3\t3\t5");
console.log("Day4\t3\t5");
console.log(`This is a backslash symbol(\\)`);
console.log('In every programmming language it startss with "Hello,world!"');
console.log(`The saying 'seeing is believing' isn't correct in 2023`);

// ** Template literals **

let a = 7;
let b = 4;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

let x = 10;
let y = 45;
console.log(`${x} is less than ${y}: ${x < y}`);

// ** string method **

let gf = "girlfriend";
console.log(gf.length);

let exGirlfriend = "Aaliya";
console.log(exGirlfriend.length);

// ** Accessing character in a string **
// here i took humans instead of string
let humans = "BestFriend";
let firstLetter = humans[0];

console.log(firstLetter);

let secondLetter = humans[1];
let thirdLetter = humans[2];
let lastLetter = humans[9];
console.log(lastLetter);

let lastIndex = humans.length - 1;
console.log(humans[lastIndex]);

// ** toUpperCase()  & toLowerCase**
let string = "LifeLong";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

let nation = "India";
console.log(nation.toUpperCase());
console.log(nation.toLowerCase());

// ** substr **

let human = "bestfriend";
console.log(human.substr(4, 6));

let enemy = "heartless";
console.log(enemy.substr(5, 6));

// ** substring **

let str = "javascript";
console.log(str.substring(0, 4));
console.log(str.substring(4, 0));
console.log(str.substring(4));

// ** split **

let food = "we can eat samosa everyday";
console.log(food.split());

console.log(food.split(""));

let Nickname = "vishal";
console.log(Nickname.split());
console.log(Nickname.split(""));

let supremeGod = "HariHar(VishnuMahesh)";
console.log(supremeGod.split());
console.log(supremeGod.split(""));

let Morningchant = "Hare krishna";
let EveningChant = "Hare Ram";
let AlwaysChant = Morningchant + " " + EveningChant;
console.log(AlwaysChant.split());

// ** Trim() **

let prasad = "  Laddu  ";
console.log(prasad.trim(""));
console.log(prasad);

let foodOne = "  Biryani  ";
console.log(foodOne.trim(""));
console.log(foodOne);

let Ourcountry = "  India is a great country  ";
console.log(Ourcountry.trim());
console.log(Ourcountry);

// ** includes() **

let text = "30 days of JavaScript";
console.log(text.includes("Days"));
console.log(text.includes("days"));

// ** Replace() : syntax : string.replace(oldString,newString) **

const message = " 30 days of javaScript ";
let result = message.replace("javaScript", "python");
console.log(result);

// ** charAT : Syntax: string.charAt(index) **

let fastFood = "vegBurger";
console.log("Character at index 0:" + fastFood.charAt(0));
console.log("Character at index 2:" + fastFood.charAt(2));

// ** string to int **

//let num = '7'
//let numInt = parseInt(num)
//console.log(numInt);

// let num = "7";
// let numInt = Number(num);
// console.log(numInt);

let numOne = "8";
let Int = +numOne;
console.log(Int);

// ** string to float **

let num = "9.81";
let numFloat = Number(num);
console.log(numFloat);

// ** float to int **

let num1 = 9.81;
let numInt = parseInt(num);
console.log(numInt);
