//Filters in js

// let students =[
//         {id:"01",name:"lav",sports:"cricket"},
//         {id:"02",name:"ram",sports:"volleyball"},
//         {id:"03",name:"shyam",sports:"basketball"},
//         {id:"04",name:"Ankit",sports:"cricket"},
//         {id:"05",name:"Rahul",sports:"badminton"}
//         ]

// let newStudents = students.filter((curvalue)=>{
//         if(curvalue.id %2 ==0){
//             return true; 
//         }
//         else return false;
// })

// console.log("new array is here",newStudents);


//Map In javascripts

let students =[
    {id:"01",name:"lav",sports:"cricket"},
    {id:"02",name:"ram",sports:"volleyball"},
    {id:"03",name:"shyam",sports:"basketball"},
    {id:"04",name:"Ankit",sports:"cricket"},
    {id:"05",name:"Rahul",sports:"badminton"}
 ]


const newArray = students.filter((currValue)=>currValue.sports==="cricket")
.map((currValue,index,array)=>{
    return `<li>${currValue.name}</li>`;
});


console.log(newArray);

const div = document.getElementById("lav");
div.innerHTML=`<ul>${newArray.join("")}</ul>`;
