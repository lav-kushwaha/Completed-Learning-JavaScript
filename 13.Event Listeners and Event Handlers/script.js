//Dom Events
// 1.Event Handler
// 2.Event Listener


// 1.Event Handler->Examples.

// const myFunction =()=>{
//     alert('Hey I am OnClick Event')
// }

// function mouseOver(){
//     console.log("Hey I am OnMouseOver");
// }

// function mouseMove(){
//     console.log("Hey I am onMouse Move");
// }

// const keysUp =()=>{
//     console.log("KeyUp");
// }

// const keyDown=()=>{
//     console.log("keyDown");
// }

// const keyPress=()=>{
//     console.log("Key Press");
// }


//Event Listener

// const cont = document.getElementById("container");
// cont.addEventListener("click",()=>{
//     console.log("hey i am container");
// });


// const box = document.getElementById("box-1");
// box.addEventListener("click",(e)=>{
//     console.log("event object",e.clientX, e.clientY);
// });

// const inputs = document.getElementById("nameInput");
// inputs.addEventListener("focus",()=>{
//     console.log("hey");
// })

//Bubbling vs Capturing

const cont = document.getElementById('container');
cont.addEventListener('click',()=>{
    console.log("container");
},true);

const boxes = document.getElementById('box-2');
boxes.addEventListener('click',()=>{
    console.log("box2");
});