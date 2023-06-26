//CallBackFunction
// A callback is a function passed as an argument to another function.
// This technique allows a function to call another function.
// A callback function can run after another function has finished.

// =================>Examples<========================
// const calculate = (a,b,operation)=>{
//     return operation(a,b);  
// }

// const operation = (a,b)=>{
//       return a+b;
// }

// console.log(calculate(10,20,operation));

// ===================Examples 2=========================
const calculate =(a,b,operation)=>{
    return operation(a,b);
}

//Method 1
// const add=calculate(2,3, function (num1,num2){
//     return num1+num2;
// });
// console.log(add);


//Method 2
const subtration =(a,b)=>{
    return a-b;
}
const SubResult = calculate(20,5,subtration);
console.log(SubResult);

//Method 3
// function multiply(a,b){
//     return a*b;
// }
// const mulResult = calculate(3,2,multiply);
// console.log(mulResult);

