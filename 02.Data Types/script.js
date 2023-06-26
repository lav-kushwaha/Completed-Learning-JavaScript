// Data_Types In JavaScript
// There are 8 Types of Data_Types In JavaScript.
// 1.Number
// 2.String
// 3.Boolean
// 4.Object 
// 5.Undefined
// 6.Null
// 7.Symbol
// 8.BigInt


//Number Data-Type
let num = 23;
console.log('the number of ',num);
//We can check our data types by using- typeof()
console.log(typeof(num));

//String Data-Type
let str = "Lav";
console.log('the str of ',str);
//We can check our data types by using- typeof()
console.log(typeof(str));

//Boolean Data-Type
let bool = true;
console.log('the boolean of ',bool);
//We can check our data types by using- typeof()
console.log(typeof(bool));

//Object Data-Type
const person = {firstName:"John", lastName:"Doe"}
console.log('the name of ',person);
//We can check our data types by using- typeof()
console.log(typeof(person));

//Undefined DataTypes.
let name;
console.log(name);
//We can check our data types by using- typeof()
// console.log(typeof(name));

// Null Data-Types
let Null = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Null = null;
console.log(Null);

// Symbol Data-Type
// Create a Symbol
const mySymbol = Symbol();
console.log(mySymbol);
// expected output: Symbol()

// BigInt Data-Types.
let bigint = 23232389422888293;
console.log(bigint);


// JavaScript Type Conversion
// 1.Number
// 2.String
// 3.Boolean

// Number to String conversion.
let nums = 23;
nums = String(23);
console.log(nums)
console.log(typeof(nums));

// String to Number conversion.
let strr = "lav";
strr = Number(strr);
console.log(strr);

// output:NaN(Not a number)

//Number to boolean Conversion.
let numss = 20;
numss = Boolean(numss);
console.log(numss)
// output: true


