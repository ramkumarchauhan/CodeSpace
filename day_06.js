/*
    Asynchronous Javascript-
        1. setTimeout(), setInterval() & clearInterval() -> These are built-in functions for scheduling asynchronous execution of code after a specified delay or at regular intervals.
        2. fetch() -> A modern interface (alternative to XMLHttpRequest) for fetching resources (such as JSON, HTML, or images) across the network.
        3. XMLHttpRequest() -> XMLHttpRequest is an older API used for making HTTP requests from the browser
        4. async/await -> It provides syntactic sugar over Promises, making asynchronous code look and behave more like synchronous code.
        5. Promise() -> Promises provide a way to handle asynchronous operations more cleanly and avoid callback hell. Promises represent a value that may be available now, in the future, or never.
*/

// function alertMsg(){
//     console.log("Time out!!!");
// }
// setTimeout(alertMsg,10000);

//------------------------------------------------------------

// const timeout = 2000;
// function greet(name){
//     console.log(`Greeting after ${timeout} miliseconds.`)
//     console.log(`Hi, ${name}`);
// }
// setTimeout(() => {
//     greet("Ram");
// }, timeout);

//-----------------------------------------------------------

// let count = 0;
// function timer(count){
//     console.log(`${count}`);
// }
// setInterval(() => {
//     count++;
//     timer(count);
// }, 1000);

//-----------------------------------------------------------

// let count = 0;
// function timer(count){
//     console.log(`${count}`);
// }
// let interval = setInterval(() => {
//     count++;
//     timer(count);
// }, 1000);

//----------------------------------------------------------

// let count = 0;
// function timer(count){
//     console.log(`${count}`);
// }
// let interval = setInterval(() => {
//     count++;
//     timer(count);
//     if(count === 18){
//         clearInterval(interval);
//     }
// }, 1000);

//----------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => {console.log("Data Fetched.")})
// .catch(err => {console.log("Error fetching data.")});

//----------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     return res.json();
// })
// .then(data => console.log("Data is : "+ JSON.stringify(data))) // JSON.stringify() is used for showing the actual data otherwise it will show only [object object].
// .catch(err => {console.log(`Error fetching data. ${err}`)});

//----------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log("Comments are : "+ JSON.stringify(data));
// })
// .catch(err =>{
//     handleError(err);
// });
// function handleError(error){
//     console.log("Error!!! Data not fetched."+ error);
// }

//----------------------------------------------------------
