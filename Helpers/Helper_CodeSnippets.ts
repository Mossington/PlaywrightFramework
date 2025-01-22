/*------------------------------------------------------------------------------------------------------------*/
/*LOOPS
/*------------------------------------------------------------------------------------------------------------*/
/*All for loops can be written as while loops, and vice-versa. Just use whichever loop seems more appropriate to the task at hand.

In general, you should use a for loop when you know how many times the loop should run. If you want the loop to break based on a condition
other than the number of times it runs, you should use a while loop.*/

//For Loop
//.lengh equates all the "strings" in the array
//console.log(fruits[i])  ----- "i" will return all items in the array
//console.log(fruits[2])  ----- [2] will return the itme that sits at number "2" in the array list
// console.log(fruits)  ----- (fruits) will returnt he full list and thier associated
let fruits: Array<string> = ["Apple", "Orange", "Banana"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // output: Apple Orange Banana
}

//index equates all the "strings" in the array
//console.log(colours[index])  ----- "index" will return all items in the array
//console.log(colours[2])  ----- [2] will return the itme that sits at number "2" in the array list
// console.log(colours)  ----- (colours) will returnt he full list and thier associated index's
let colours: Array<string> = ["Red", "Yellow", "Blue"];
for (var index in colours) {
  console.log(colours[index]); // output: Apple Orange Banana
}

//While Loop
let XYZ: number = 2;

while (XYZ < 10) {
  console.log(`Block statement execution no.` + XYZ);
  XYZ++;
}

var sports: Array<string> = [
  `Golf`,
  `Football`,
  `netball`,
  `tennis`,
  `rugby`,
  `swimming`,
  `running`,
];
var desiredString: string = "tennis";
var foundString = sports.find((item) => item === desiredString);
if (foundString) {
  console.log(`Array contains the string '${desiredString}'.`);
  console.log(sports.indexOf(desiredString));
} else {
  console.log(`Array does not contain the string '${desiredString}'.`);
}

var desiredString: string = "runnings";
if (sports.includes(desiredString)) {
  console.log(`Array contains the string '${desiredString}'.`);
  console.log(sports.indexOf(desiredString));
} else {
  console.log(`Array does not contain the string '${desiredString}'.`);
}

var desiredString: string = "rugby";
if (sports.indexOf(desiredString)) {
  console.log(`Array contains the string '${desiredString}'.`);
  console.log(sports.indexOf(desiredString));
} else {
  console.log(`Array does not contain the string '${desiredString}'.`);
}

var desiredString: string = `football`;
while (sports.includes(desiredString)) {
  console.log(`Array contains the string '${desiredString}'.`);
  console.log(sports.indexOf(desiredString));
  break;
}

/*------------------------------------------------------------------------------------------------------------*/
//Switch
/*------------------------------------------------------------------------------------------------------------*/
var day: number = 4;
var aaaa: string = "";

switch (day) {
  case 0:
    console.log("It is a Sunday.");
    break;
  case 1:
    console.log("It is a Monday.");
    break;
  case 2:
    console.log("It is a Tuesday.");
    break;
  case 3:
    console.log("It is a Wednesday.");
    break;
  case 4:
    aaaa = "It is a Thursday.";
    break;
  case 5:
    aaaa = "It is a Friday.";
    break;
  case 6:
    aaaa = "It is a Saturday.";
    break;
  default:
    aaaa = "No such day exists!";
    break;
}
console.log(aaaa);

/*------------------------------------------------------------------------------------------------------------*/
// IF Statements
/*------------------------------------------------------------------------------------------------------------*/
// IF Statement 1
var definedNumber: number = 10;
definedNumber = 9;

if (definedNumber == 10) {
  console.log("This is correct, the number is 10");
} else {
  console.log("Sorry, the actual number is:" + definedNumber);
}

// IF Statement 2
let x: number = 10,
  y = 5;
if (x > y) {
  console.log("x is greater than y.");
} else {
  console.log("x is less than or equal to y."); //This will be executed
}

// Lists

/*------------------------------------------------------------------------------------------------------------*/
// Variables
/*------------------------------------------------------------------------------------------------------------*/

// String
var stringOne: string = `Greg Moss`;
console.log(stringOne);

//not, 2 slashes is equal to 1 slash when within a string
var insert: string = `the best!!`;
var stringTwo: string = `Greg Mos is simply ${insert} // better than all the rest`;
console.log(stringTwo);

/*------------------------------------------------------------------------------------------------------------*/
// Number
var countToTen: number = 12345678910;
console.log(countToTen);

/*------------------------------------------------------------------------------------------------------------*/
// Boolean
var trueOrFalse: Boolean = true;
var falseOrTrue: Boolean = false;
console.log(trueOrFalse);
console.log(falseOrTrue);

/*------------------------------------------------------------------------------------------------------------*/
// Any
var anyString: any = "ABC";
var anyNumber: any = 123;
var anyBoolean: any = true;
console.log(anyString);
console.log(anyNumber);
console.log(anyBoolean);

/*------------------------------------------------------------------------------------------------------------*/
//Union Type Variables

var multiRandom: string | number;
multiRandom = `hello`;
multiRandom = 123;
multiRandom = `Hello, i can count to ` + 123;
console.log(multiRandom);

/*------------------------------------------------------------------------------------------------------------*/
// json
var jasonHomeInfo: any = {
  HouseNumber: 12,
  AddressLineOne: "Frampton house",
  AddressLineTwo: "Bristol2",
  PostCode: "BS33 3DD",
  Phone: 12222343232,
};
console.log(jasonHomeInfo);
console.log(jasonHomeInfo.AddressLineOne);
console.log(jasonHomeInfo.Phone);

/*------------------------------------------------------------------------------------------------------------*/
// enum
enum boysNames {
  John,
  Chalres,
  Bobby,
  Chris,
  Greg,
  David,
}
console.log(boysNames);
console.log(boysNames.David);

enum boysNamesTwo {
  John = 5,
  Chalres = 4,
  Bobby = 3,
  Chris = 2,
  Greg = 1,
  David = 0,
}
console.log(boysNamesTwo);
console.log(boysNamesTwo.Greg);

/*------------------------------------------------------------------------------------------------------------*/
// Arrays - Homogenous
var carMakes: Array<string> = [`BMW`, `Ford`, `Nissan`, `Scoda`];
console.log(carMakes);
console.log(carMakes[3]);

carMakes.push("Mini");
console.log(carMakes);

// Arrays - Hetrogenous
var randomThings: Array<any> = [1, `cars`, true];
console.log(randomThings);

randomThings.push("Help me");
console.log(randomThings);
