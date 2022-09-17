// Arithmetic operations
let addition = 5 * "hello";
let sub = 6 - 5;
let multiply = 7 * add;
let dev = 7 / add;
let expo = 5 ** 2;
let mod = 5 % 2;
mod === 0;

let d = 5;
// d++;
d--;
// console.log(typeof add);

// Functions

function add(x, y) {
    let z = x + y;
    return z;
    // let u = 5 * 3;
}

//  regular func

function myName(fName) {
    return fName + " " + "Almureish";
}

// Arrow func

const myArrowName = (fName) => fName + " " + "Almureish";
let x = "Aiman";

// console.log(myArrowName);

// Objects

const house = {
    wallColor: "green",
    doorColor: "brown",
    garden: true,
    familyMembers: 5,
    guests: 2,
    numberOfHouseMembers: function() {
        return this.familyMembers + this.guests;
    },
};

// house.push("floor", "yellow");

// console.log(house);

const myNewName = () => {
    document.querySelector("h1").innerHTML = "Not Aiman";
};

// Strings

let str = "this is a street";
// console.log(str.length);
let newStr = str.substr(3, 3);
newStr.toUpperCase(); // returns
// console.log(newStr);

// Templates
let templateStr = "template";

let notTemplate = "My not" + " " + templateStr;

let template = `My template ${templateStr}`;
// console.log(template);

let _NAN = "this is not a number";
console.log(parseInt("0.5"));