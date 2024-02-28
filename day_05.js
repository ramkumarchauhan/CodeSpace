/*
    ES6 features-
        - Arrow function
        - Rest Parameter ->Used to collect multiple arguments into a single array parameter. It allows functions to accept an indefinite number of arguments, primarily used in function declarations.
        - Spread Syntax -> Used for Destructuring. It can expand iterable objects into multiple elements.
        - Template literals or String interpolation -> Allows for easier string interpolation and multiline strings using backticks (`) and ${}.
        - Destructuring Assignment -> Destructuring allows for extracting values from arrays or properties from objects into distinct variables.
*/

// const sum =(a,b)=>{return a+b}
// let result = sum(4,8);
// console.log(result);

//-------------------------------------------------

// const greet=(name)=>{
//     console.log("Hello "+ name);
// }
// greet("Ram");
// greet("Shyam")
// greet("Gojo")

//------------------------------------------------- Rest Parameter

// function evenNumbers(...num){
//     return num.reduce((acc,curr)=>acc+curr);
// }
// console.log(evenNumbers(2,4,4,8));
// console.log(evenNumbers(4,8,6,12,18,20,22,20,26));

// const sum =(...numbers)=>{
//     let result = 0;
//     for (const num of numbers) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum(1,2,3,4,5,6));

//-------------------------------------------------- Spread Syntax

// const arr1 = [1,4,5,8,9];
// const arr2 = [4,8,6,4,2];
// const arr3 = [12,78,23]
// const concatedArr = arr1.concat(arr2,arr3);
// const combineArr = [...arr1,...arr1,...arr3];
// console.log(concatedArr);
// console.log(combineArr);

// const arr = ["Alice", "Bob", "Jack","Tony"];
// [Manager, ...Workers]=arr;
// console.log(`Manager is : ${Manager}`)
// for (const worker of Workers) {
//     console.log(`workers are : ${worker}`);
// }

// function printBookInfo({bookName,author,price}){
//     console.log(`Book name : ${bookName}\nAuthor : ${author}\nPrice : ${price}`);
// }
// const books={
    // bookName : "Lost child",
    // author : "M.G. Thomson",
    // price : 25.20,
    // edition : 3
// }
// printBookInfo(books);

// function getBookInfo(){
//     return {
//         bookName : "Lost child",
//         author : "M.G. Thomson",
//         price : 25.20,
//         edition : 3
//     };
// }
// const {bookName,author} =getBookInfo();
// console.log(`Boon : ${bookName}\nAuthor : ${author}`);

// const student = {
//     name: "Alice",
//     info: {
//         age: 25,
//         grade: "A"
//     }
// };

// const { name, info: { age, grade } } = student;
// console.log(`${name} is ${age} years old and has grade ${grade}`);
