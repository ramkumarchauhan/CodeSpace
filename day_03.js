/*
    Array & Array Methods
    - push() -> Adds one or more elements to the end of an array and returns the new length of the array.
    - pop() -> Removes the last element from an array and returns that element.
    - unshift() -> Inserts the given values to the beginning of an array-like object.
    - shift() -> Removes the first element from an array.
    - concat() -> Returns a new array that combines the elements of the original array with other arrays or values.
    - reverse() -> Reverses an array in place and returns the reference to the same array.
    - sort() -> Sorts the elements as strings by default and returns the reference to the same array.
    - toString() -> Returns a string representing the object.
    - slice() -> array.splice(start, number of elements in the array to remove from start, elements to add to the array beginning from the start index,item2,...)
    - splice() -> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    - join() -> Joins the array’s items into a string and returns that string.
    - forEach() -> Executes a callback function once for each array element.
    - map() -> Creates a new array with the results of calling a provided function on every element in the calling array.
    - filter() -> Creates a new array with all elements that pass the test implemented by the provided function.

*/

// const cars = ["BMW","Tata","Safari","Mahindra"];
// cars.push("Audi");
// console.log(cars);

// const cars = ["BMW","Tata","Safari","Mahindra"];
// cars.pop();
// console.log(cars);

// const cars = ["BMW","Tata","Safari","Mahindra"];
// cars.unshift("Audi");
// console.log(cars);

// const cars = ["BMW","Tata","Safari","Mahindra"];
// cars.shift();
// console.log(cars);

// const color1 = ["Red", "Green", "Yellow", "Blue"];
// const color2 = ["Purple","Magenta","Pink"];
// console.log(color1.concat(color2));

// const rawData = [12,3,45,78,45,63];
// rawData.reverse();
// console.log(rawData);

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// rawData.sort();
// console.log(rawData);

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// rawData.sort((a,b)=> a - b);
// console.log(rawData);

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// let rawDataString = rawData.toString();
// console.log(rawData);
// console.log(rawDataString);

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// let sliced1 = rawData.slice(5);
// let sliced2 = rawData.slice(2,6);
// console.log(rawData);
// console.log(sliced1);
// console.log(sliced2);
// console.log(sliced2.includes(24));

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// let splicedData1 = rawData.splice(0,5);
// let splicedData2 = rawData.splice(4,8);
// console.log(rawData);
// console.log(splicedData1);
// console.log(splicedData2);

// const rawData = [12,3,45,78,45,63,78,100,10,5];
// rawData.splice(0,5,3,4,4,5);
// console.log(rawData);

// const oddNumbers = [1,7,3,9,15];
// console.log(oddNumbers.join("-"));


