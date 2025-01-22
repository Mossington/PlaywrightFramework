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
var fruits = ["Apple", "Orange", "Banana"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
//index equates all the "strings" in the array
//console.log(colours[index])  ----- "index" will return all items in the array
//console.log(colours[2])  ----- [2] will return the itme that sits at number "2" in the array list
// console.log(colours)  ----- (colours) will returnt he full list and thier associated index's
var colours = ["Red", "Yellow", "Blue"];
for (var index in colours) {
    console.log(colours[index]); // output: Apple Orange Banana
}
//While Loop
var XYZ = 2;
while (XYZ < 10) {
    console.log("Block statement execution no." + XYZ);
    XYZ++;
}
var sports = [
    "Golf",
    "Football",
    "netball",
    "tennis",
    "rugby",
    "swimming",
    "running",
];
var desiredString = "tennis";
var foundString = sports.find(function (item) { return item === desiredString; });
if (foundString) {
    console.log("Array contains the string '".concat(desiredString, "'."));
    console.log(sports.indexOf(desiredString));
}
else {
    console.log("Array does not contain the string '".concat(desiredString, "'."));
}
var desiredString = "runnings";
if (sports.includes(desiredString)) {
    console.log("Array contains the string '".concat(desiredString, "'."));
    console.log(sports.indexOf(desiredString));
}
else {
    console.log("Array does not contain the string '".concat(desiredString, "'."));
}
var desiredString = "rugby";
if (sports.indexOf(desiredString)) {
    console.log("Array contains the string '".concat(desiredString, "'."));
    console.log(sports.indexOf(desiredString));
}
else {
    console.log("Array does not contain the string '".concat(desiredString, "'."));
}
var desiredString = "football";
while (sports.includes(desiredString)) {
    console.log("Array contains the string '".concat(desiredString, "'."));
    console.log(sports.indexOf(desiredString));
    break;
}
var allFruits = ["Apple", "Orange", "Banana"];
for (var i = 0; i < allFruits.length;) {
    if (allFruits.includes("Banana")) {
        console.log("Array contains the string item.");
        console.log(allFruits[i]);
        break;
    }
    else {
        i++;
    }
}
/*------------------------------------------------------------------------------------------------------------*/
//Switch
/*------------------------------------------------------------------------------------------------------------*/
var day = 4;
var aaaa = "";
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
var definedNumber = 10;
definedNumber = 9;
if (definedNumber == 10) {
    console.log("This is correct, the number is 10");
}
else {
    console.log("Sorry, the actual number is:" + definedNumber);
}
// IF Statement 2
var x = 10, y = 5;
if (x > y) {
    console.log("x is greater than y.");
}
else {
    console.log("x is less than or equal to y."); //This will be executed
}
// Lists
/*------------------------------------------------------------------------------------------------------------*/
// Variables
/*------------------------------------------------------------------------------------------------------------*/
// String
var stringOne = "Greg Moss";
console.log(stringOne);
//not, 2 slashes is equal to 1 slash when within a string
var insert = "the best!!";
var stringTwo = "Greg Mos is simply ".concat(insert, " // better than all the rest");
console.log(stringTwo);
/*------------------------------------------------------------------------------------------------------------*/
// Number
var countToTen = 12345678910;
console.log(countToTen);
/*------------------------------------------------------------------------------------------------------------*/
// Boolean
var trueOrFalse = true;
var falseOrTrue = false;
console.log(trueOrFalse);
console.log(falseOrTrue);
/*------------------------------------------------------------------------------------------------------------*/
// Any
var anyString = "ABC";
var anyNumber = 123;
var anyBoolean = true;
console.log(anyString);
console.log(anyNumber);
console.log(anyBoolean);
/*------------------------------------------------------------------------------------------------------------*/
//Union Type Variables
var multiRandom;
multiRandom = "hello";
multiRandom = 123;
multiRandom = "Hello, i can count to " + 123;
console.log(multiRandom);
/*------------------------------------------------------------------------------------------------------------*/
// json
var jasonHomeInfo = {
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
var boysNames;
(function (boysNames) {
    boysNames[boysNames["John"] = 0] = "John";
    boysNames[boysNames["Chalres"] = 1] = "Chalres";
    boysNames[boysNames["Bobby"] = 2] = "Bobby";
    boysNames[boysNames["Chris"] = 3] = "Chris";
    boysNames[boysNames["Greg"] = 4] = "Greg";
    boysNames[boysNames["David"] = 5] = "David";
})(boysNames || (boysNames = {}));
console.log(boysNames);
console.log(boysNames.David);
var boysNamesTwo;
(function (boysNamesTwo) {
    boysNamesTwo[boysNamesTwo["John"] = 5] = "John";
    boysNamesTwo[boysNamesTwo["Chalres"] = 4] = "Chalres";
    boysNamesTwo[boysNamesTwo["Bobby"] = 3] = "Bobby";
    boysNamesTwo[boysNamesTwo["Chris"] = 2] = "Chris";
    boysNamesTwo[boysNamesTwo["Greg"] = 1] = "Greg";
    boysNamesTwo[boysNamesTwo["David"] = 0] = "David";
})(boysNamesTwo || (boysNamesTwo = {}));
console.log(boysNamesTwo);
console.log(boysNamesTwo.Greg);
/*------------------------------------------------------------------------------------------------------------*/
// Arrays - Homogenous
var carMakes = ["BMW", "Ford", "Nissan", "Scoda"];
console.log(carMakes);
console.log(carMakes[3]);
carMakes.push("Mini");
console.log(carMakes);
// Arrays - Hetrogenous
var randomThings = [1, "cars", true];
console.log(randomThings);
randomThings.push("Help me");
console.log(randomThings);
