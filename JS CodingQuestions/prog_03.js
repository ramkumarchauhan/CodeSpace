/*Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). */

//1. ------------Using loop
// let str = "comoco";
// let reversed = "";

// for(let char = str.length - 1; char >= 0; char--){
//     reversed += str[char];
// }
// if(str === reversed){
//     console.log("Palindrome.");
// }else{
//     console.log("Not palindrome.");
// }

//2. ------------Using split() and reverse()

// let str2 = "mam";

// let reversed2 = str2.split('').reverse().join('');

// if(str2 === reversed2){
//     console.log("Palindrome.");
// }else{
//     console.log("Not palindrome.");
// }

// 3. ------------Using spread operator

let str3 = "oooo";
let reversed3 = [...str3].reverse().join('');
if(str3 === reversed3){
    console.log("Palindrome.");
}else{
    console.log("Not palindrome.");
}