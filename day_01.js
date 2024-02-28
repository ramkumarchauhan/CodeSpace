/*
    0. console.log() --> Output in console
    1. Variable declaration - let, var, const
    2. Data Types - numbers, strings, booleans, null, undefined
    3. Condiotionals - if, if-else, mutli-conditional if-else
    4. Loops - while, do-while, for loops --> Lopps continue executing block of code until a termination condition meets.
    5. Iterators - for...of, for...in --> Iterators on each available element of array or object
*/

/* 1. Variable declaration - let, var, const ----------------------------------*/

// var can be redeclared and reassigned.

// var bookName = "Engineering Physics";
// console.log(bookName);
// var bookName = "Beginners Javascript";
// console.log(bookName);
// console.log("Both executed successfully.")

// let cannot be redeclared but reassigned.

// let penColor = "Red";
// console.log(penColor);

// let penColor = "Blue"
// // This gives -> SyntaxError: Identifier 'penColor' has already been declared
// console.log(penColor); 

// penColor = "green";
// console.log(penColor);

// const fixes the assigned value, can't be changed.
// const totalChances = 8;
// totalChances = 10;
// // This gives -> TypeError: Assignment to constant variable.
// console.log(totalChances);

/* 2. Data Types - numbers, strings, booleans, null, undefined------------------*/

// let totalBooks = 80;
// console.log(typeof totalBooks);

// let costPrice = 48.67;
// console.log(typeof costPrice);

// let userName = "Jack";
// console.log(typeof userName);

// let text = "It is a simple text line.";
// console.log(typeof text);

// let txt = "This is a simple text."
// console.log(txt.length);

// let isUploaded = false;
// console.log(typeof isUploaded);

// let prime = false;
// console.log(typeof prime);

// let xAxis = null;
// // This gives 'object' type.
// console.log(typeof xAxis);

// let initialValue;
// console.log(typeof initialValue);

/* 3. Condiotionals - if, if-else, mutli-conditional if-else------------------- */

// let num = 4;
// if(num< 5){
//     console.log("Number is less than 5.");
// }

// num = 12;
// if(num < 10){
//     console.log("Number is less than ")
// }else{
//     console.log("Number is greater than 10.")
// }

// num = 0;
// if(num==0){
//     console.log("Number is equal to 0.")
// }else if(num == 15){
//     console.log("Number is equal to 15.");
// }else{
//     console.log("Number is greater than 15.")
// }

/* 4. Loops - while, do-while, for loops ------------ */

// for(let count = 1; count <= 10; count++){
//     console.log(count);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(4*i);
// }

// for(let m = 2; m != 8; ++m){
//     console.log(m);
// }

// let num = 20;
// while(num != 0 ){
//     console.log(num);
//     num = num - 1;
// }

//-----------Factorial Program--------------------
// let number = 10;
// let factorial = 1;
// while(number != 1){
//     factorial = number * factorial;
//     number--;
// }
// console.log("Factorial is: "+ factorial);

// Sum of first n numbers--------------------------
// let m = 10;
// let sum = 0;
// do{
//     sum = m + sum;
//     m--;
// }while(m > 0)
// console.log("Sum is : "+ sum);

/* 5. Iterators - for...of(With arrays), for...in(with Objects)-----------------------*/

// const onlinePay = ["PhonePay","Paytm","GooglePay"];
// for (const items of onlinePay) {
//     console.log(items);
// }

// let str = "Pineapples";
// for (char of str){
//     if(char == 'p'){
//         break;
//     }
//     console.log(char);
// }

// const bookDetails = {
//     bookName : "Personality Traits",
//     author : "P. William",
//     price: 45.08,
//     pubYear : 2018
// }
// for (const key in bookDetails){
//     console.log(`${key} : ${bookDetails[key]}`);
// }