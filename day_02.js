/*
    1. String Methods 
        - concat() -> joins two strings.
        - charAt(index) -> returns the index number of mentioned character
        - toUpperCase() -> Change all leters to Capital case.
        - toLowerCase() -> Change all leters to Small case.
        - trim() -> Removes whitespace from both ends of a string.
        - split(",") -> Splits a string into an array of substrings based on the specified separator.
        - replace(oldValue, newValue) & replaceAll(oldVlaue, newValue) -> Returns a new string replacing old value with new one.
        - includes(searchWord) -> Determines whether one string may be found within another string
        - startsWith(searchWord) -> Checks if a string starts with the specified string.
        - endsWith(searchWord) -> Checks if a string ends with the specified string.
        - sllice(startIndex, endIndex) -> Extracts a section of a string and returns it as a new string.   
*/

//-------------------------------------------------------------
// let str1 = "This is a simple line showing string.";
// let str2 = "   This is concatenated with the first string.";
// let result = str1.concat(str2);
// console.log(result);

//-------------------------------------------------------------
// let gender = "Male";
// console.log(gender.charAt(0));

//-------------------------------------------------------------

// let txt = "these all written in small case and it will be converted into uppercase."
// console.log(txt.toUpperCase());

//-------------------------------------------------------------

// let email = "RC996437@GMAIL.COM";
// console.log(email.toLocaleLowerCase());

//-------------------------------------------------------------

// let address = "    Gida Sector-7, Gorakhpur     ";
// console.log(address.trim());

//-------------------------------------------------------------

// let fruits = "apple,mango,pineapple,jackfruit,orange,grapes";
// console.log(fruits.split(","));

// let demotext = "This is a simple demo text.";
// console.log(demotext.split(" "));

// let greet = "Hello!";
// console.log(greet.split(""));

//-------------------------------------------------------------

// let greeting = "Hello Jack.";
// console.log(greeting.replace("Jack","Ram"));

// let meetGreet = "Hello Jack. Shyam, meet my friend Jack.";
// console.log(meetGreet.replaceAll("Jack","Ram"));

//-------------------------------------------------------------

// let testText = "JavaScript is one of the best language to  learn as it has spreaded almost in every field.";
// console.log(testText.includes("spreaded"));
// console.log(testText.startsWith("JavaScript"));
// console.log(testText.endsWith("field"));

//-------------------------------------------------------------

// let someText = "Mitochondria refers to cellular organelles found in most eukaryotic organisms. Mitochondria are often referred to as the 'powerhouses of the cell' because they generate most of the cell's supply of adenosine triphosphate (ATP), which is used as the source of chemical energy.";
// console.log(someText.slice(13));
// console.log(someText.slice(5,25));
// console.log(someText.slice(-45));
// console.log(someText.slice(-30,-45));