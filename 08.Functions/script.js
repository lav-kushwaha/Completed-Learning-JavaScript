//Function in JavaScript.
// Hoisting works in function declaration.

function sum(a,b){
    const add = a + b;
    const sub = a-b;
    console.log("The sum of two num is :",add);
    return sub;
}

const c =  50;
const d = 20;
const result = sum(c,d);
console.log("The new return numbers",result);


//==============Function Expression In JavaScript.=====================================

// -->In function-expression Hoisting is not work.
// const sum = function(a,b){
//     const addition = a+b;
//     console.log("The new return ans is :",addition);
// }
// const d=10;
// const e=10;
// sum(d,e);


//============== IIEF=Immediately invoked function expression.==================================

// Invoked function expression runs as soon as the browser encounters it. The benefit of this function is that it runs immediately where it’s located in the code and produces a direct output. That means it is unaffected by code which appears further down in the script which can be useful.

// ( function () {
//     let num = 4
//     console.log(num)
//     return num
// })();


// =============Nested Function Expression================

// function addsquare(a,b){
//     const ab = square(a);
//     const bc = square(b);
//     function square(num){
//         return num*num;
//     }
//     return console.log("sum of ab+bc is :",ab+bc);
// }
// addsquare(5,5);
