//Error Handling In JavaScript.

// try{
//     console.log(a);
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }

// let add = 12+12;
// console.log(add);



//Throw and prompt.
// try{
//     const a = prompt("Are you robot");
//     if(a==="Yes"){
//         console.log("Hey I am robot")
//     }
// }
// catch(err){
//     console.log(err)
// }


// try {
//     const a = prompt("Are you robot");
//     if(a==="Yes"){
//       throw new Error("Hey I am robot")
//     }
// }
// catch(err){
//     console.log(err.name,err.message);
// } 


//Finally.
try{
    console.log(a);
}
catch(err){
    console.log(err.name,err.message);
}
finally{
    console.log("Finally");
}




