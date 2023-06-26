//Promise in javascript.

// let tickets = new Promise(function (resolve,reject){
//     const isboarding = false;
//     if(isboarding){
//         resolve("You are not in the plane");
//     }
//     else{
//         reject("Your flight is cancelled");
//     }
// });

// tickets.then((data)=>{
//     console.log("ohh shit",data);
// }).catch((data)=>{
//     console.log("opps",data);
// }).finally(()=>{
//     console.log("Hey i'm finally i execute everytime");
// });


//Making Pizza.

// function getCheese(){
//     return new Promise ((resolve,reject)=>{
//        setTimeout(()=>{
//         const cheese ="🧀"
//         resolve(cheese);
//        },2000);
//     });
// }

// function makeDough(cheese){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const dough = cheese + "🫓";
//             resolve(dough);
//             // reject(dough)
//         },2000)
//     });
// }

// function bakePizza(dough){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const pizza=dough+"🍕"
//             resolve(pizza);
//         },2000);
//     });
// }

// getCheese()
// .then((cheese)=>{
//     console.log("Here is your cheese",cheese);
//     return makeDough(cheese);
// })
// .then((dough)=>{
//     console.log("Here is your dough",dough);
//     return bakePizza(dough);

// })
// .then((pizza)=>{
//     console.log("Here is your pizza",pizza);
// })
// .catch((data)=>{
//     console.log("error occured",data);
// })
// .finally(()=>{
//     console.log("Process ended");
// });

//Async await

function getCheese(){
    return new Promise ((resolve,reject)=>{
       setTimeout(()=>{
        const cheese ="🧀"
        resolve(cheese);
       },2000);
    });
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough = cheese + "🫓";
            resolve(dough);
            // reject(dough);
        },2000)
    });
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza=dough+"🍕"
            resolve(pizza);
        },2000);
    });
}


async function orderPizza(){
    try{
     const cheese=await getCheese();
     console.log("Here is your cheese",cheese);
     const dough = await makeDough(cheese);
     console.log("Here is your dough",dough);
     const pizza = await bakePizza(dough);
     console.log("Here is your pizza",pizza);
    } 
    catch(err){
        console.log("error occur",err);
    }
    console.log("Process ended");
}

orderPizza();

// Note:Promise mein (reject and resolve hota hai) and resolve hua toh .then mein nikal lenge aur reject hua toh .catch me nikal lenge.
//Try and catch for error handling in async await.