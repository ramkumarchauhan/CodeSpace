/*Write a JavaScript program to find the maximum number in an array. */

//1. ---------------Using Math.max()

// const arr = [3,23,45,2,1,56,43,32,34];
// function maxEle(arr){
//     return Math.max(...arr);  
// }
// console.log("Max element is : "+ maxEle(arr));

//2. ---------------Using loop

// const arr = [3,23,45,2,1,56,43,32,34];
// let maxEle = arr[0];
// for(let i = 0 ; i < arr.length ; i++){
//     if(maxEle < arr[i]){
//         maxEle = arr[i];
//     }
// }
// console.log("Max element is : "+ maxEle);

//------------------Using forEach()

// const array = [3, 23, 45, 2, 1, 56, 43, 32, 34];
// let maxele = array[0];

// array.forEach(element => {
//     if (element > maxele) {
//         maxele = element;
//     };
//     return maxele;
// });
// console.log("Max element is : " + maxele);

//------------------Using for...of()

// const array = [3, 23, 45, 2, 1, 56, 43, 32, 34];
// let maxEle = array[0];

// for (let element of array) {
//     if(element > maxEle){
//         maxEle = element;
//     }
// }
// console.log("Max element is : "+ maxEle);