//Dom Manipulation

// const myBody = document.body;
// console.log(myBody);

// //Select by Id.
// const Ids = document.getElementById("box-2");
// console.log(Ids);

// //select by classname.
// const classes =  document.getElementsByClassName("box");
// console.log(classes);


// //select by tagName
// const tags = document.getElementsByTagName("div");
// console.log(tags);


// //select by queryselector.->isme container ke ander first random select hoga.
// const random = document.querySelector(".container .random");
// console.log(random);

// //select by querySelectorAll.=>isme container ke ander jitna bhi random hai sab select hojayega
// const randoms = document.querySelectorAll(".container .random");
// console.log(randoms);


// note:acces karne ke liye sabse best byId hota hai bcz har element ka id unique hota hai hum wrong id access nhi karenge.
// ==>Classes ka used karte hai hum apne element ko style karne ke liye aur id ka used karte hai kisi element ko acess karne ke liye


//Modifying and acess element.

// const box = document.getElementById("box-1");
// box.innerHTML="<h1>modify</h1>" //inner html means box-1 id ka content
// box.style.backgroundColor="yellow"
// box.style.color="red"

// box.src="imgurl"


//modifying class in html
// const box1 = document.getElementById("box-1");
// box1.classList.add("box-round");

// const boxes = document.getElementsByClassName("box");

// for(let i=0; i<boxes.length;i++){
//     boxes[i].classList.add("box-round");
//     boxes[i].innerHTML="<h1>lav</h1>"
//     boxes[i].style.color="red"
// }

//remove
// const box = document.getElementById("box-1");
// box.classList.remove("box-round");

//Creating element by using DOM.
// const newParagraph = document.createElement("p");
// newParagraph.innerText="This is lav";
// newParagraph.classList.add("box");

// const cont = document.getElementById("container");
// cont.appendChild(newParagraph);



