/*Write a JavaScript program to reverse a given string. */

//1. ---------------Using split()
let str = "program";
let revStr = str.split("").reverse().join();
console.log(str);
console.log(revStr + "\n");

let str1 = "Victus";
let revStr1 = str.split('').reverse().join("");
console.log(str1);
console.log(revStr1 + "\n");

//2.----------------Using spread operator

let str3 = "Something";
let reversed = [...str3].reverse().join('');
console.log(str3);
console.log(reversed+ "\n");

//3. ----------------Using loop

let str4 = "Nvidia";
let revStr4 = "";
for(let char = str4.length - 1; char >= 0; char--){
    revStr4 += str4[char];
}
console.log(str4);
console.log(revStr4);