console.log("Hello from js");
//REPL(Read, Evaluate, Print, Loop)

//ES5
var person = "arjab";
person = "arjab khadka";
console.log(person);

//ES6
/*
let: changable variable
const: constant / doesn't change
*/

let p = "ram"; //string
p = "shyam";
console.log(p);

const per = "ram";
console.log(per);

const pi = 3.14; //number
console.log(pi);

const isValid = true; //boolean
console.log(isValid);

//variable hoisting: refers to hoist the variable to the top as initialization before assigning 

a = "holababa";
console.log(a);

var a; //hoisting
//let a; not hoisting

const personName = prompt("What is your name?");
console.log(personName);

const isAbove18 = confirm("Are you above 18 years of age?");
console.log(isAbove18);

alert(personName, isAbove18);