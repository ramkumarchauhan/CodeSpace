/*
    Objects-
        1. Object Declaration using-
            - Object Literal
            - Constructor Function
        2. Accessing object's properties
        3. 'this' keyword
*/

// const emp = {
//     userName : "Ram",
//     age : 22
// }
// console.log(emp.userName, emp.age);

// const car = {
//     carName: "Lamborghini",
//     carRegNo: 1234,
//     owner: "Ram",
//     startEngine() {
//         console.log(`Starting the engine of ${this.carName}, owned by ${this.owner}`);
//     }
// };
// console.log(car.carName, car.carRegNo, car.owner);
// car.startEngine();

//-------------------------------------------------------------------------------------

// Define the Vehicle constructor function
// function Vehicle() {
//     this.type = "";
//     this.price = 50000;
//     this.yearOfProduction = 2024;
// }

// // Create a new instance of the Vehicle object
// const vehicle = new Vehicle();

// // Set properties of the vehicle object
// vehicle.type = "Luxury BMW";
// vehicle.price = 1000000;
// vehicle.yearOfProduction = 2024;

// for (const key in vehicle) {
//     console.log(`${key} : ${vehicle[key]}`);
// }

//--------------------------------------------------------------------------------------

// Define the object constructor
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//     this.startEngine = function() {
//         console.log(`Starting the engine of ${this.make} ${this.model}`);
//     };
// }

// // Create instances of the Car object
// const car1 = new Car("Toyota", "Camry");
// const car2 = new Car("Honda", "Civic");

// // Call the startEngine method on each instance
// car1.startEngine(); // Output: Starting the engine of Toyota Camry
// car2.startEngine(); // Output: Starting the engine of Honda Civic

//---------------------------------------------------------------------------------------

// function Car(modelName, engineTest) {
//     this.modelName = modelName;
//     this.engineTest = engineTest;
//     this.modelYear = 2024;
// }

// let car1 = new Car("Lambo", "Yes");
// let car2 = new Car("Tata", "Yes");
// let car3 = new Car("BMW", "No");
// let car4 = new Car("Toyota", "Yes");

// [car1, car2, car3, car4].forEach((car)=>{
//     for (const key in car) {
//         console.log(`${key} : ${car[key]}`);
//         console.log("");
//     }
// });