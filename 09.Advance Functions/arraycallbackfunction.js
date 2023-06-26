//Array Callback Functions.
// 1.find()
// 2.findIndexof()
// 3.foreach()
// 4.map()
// 5.filter()
// 6.every()
// 7.some()

// =====================>Examples<======================================
// 1.find()
// const arr =[5,8,12,5,-4,-7,-2,-3];

// const firstNeg =(num)=>{
//     return num<0;
// }
// const result = arr.find(firstNeg);
// console.log(result);

// output:-4

// =======================================================================

// 2.findIndexof()
// const arr =[5,8,12,5,-4,-7,-2,-3];
// const firstNeg =(num)=>{
//     return num<0;
// }
// const result = arr.findIndex(firstNeg);
// console.log(result);
//// output:4

// =========================================================================
//3.foreach()

const arr =[5,8,12,5,-4,-7,-2,-3];
arr.forEach((num,i)=>{
   const result=num*num;
   console.log("Multiplication of array",result,"index of array",i);
});

//output:Multiplication of array 25 index of array 0
//Multiplication of array 64 index of array 1
//Multiplication of array 144 index of array 2
//Multiplication of array 25 index of array 3
//Multiplication of array 16 index of array 4
//Multiplication of array 49 index of array 5
//Multiplication of array 4 index of array 6
//Multiplication of array 9 index of array 7


// ============================================================================
// 4.filter()

// const arr=[2,3,5,6,7,-2,-4];

// const evennum =(num)=>{
//     const a = num%2===0;
//     return a;
// }
// console.log(arr.filter(evennum));

// output:[2,6,-2,-4]

