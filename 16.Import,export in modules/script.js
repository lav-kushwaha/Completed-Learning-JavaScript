// ===============>1st method to import<================================
//Import using curly brackets.
// import {a} from './utility.js'
// const result = a(2,3,4);
// console.log(result);

//we can rename import as well as:
// for-examples,
// import {a as addition} from './utility.js'
// const result = addition(2,3,4);
// console.log(result);

//Here i have import 2 functions.
// import { multiplication,addition } from "./utility.js";
// const multiply = multiplication(2,3,4);
// const add = addition(5,5,4);
// console.log(multiply,add);

//================>2nd method to import<==================================

//default import->In default import no need to use curly brackets.
// import addition from './utility.js'
// const result = addition(2,5,6);
// console.log(result);


// ====================>3rd method to import<==============================

//we can import everything by using *

// import * as lav from './utility.js'
// const result = lav.addition(3,2,2);
// const multiply = lav.multiplication(3,5,2);
// console.log(result+ " and "+multiply);

//output:7 and 30

