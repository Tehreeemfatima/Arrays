"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myArray = [1, 2, 3, 4, 5];
myArray.push(6);
console.log(myArray);
// Adds one or more elements to the end of an array and returns the new length of the array.
// =============================================
let myArray1 = [1, 2, 3, 4, 5];
myArray1.pop();
console.log(myArray1);
// Removes the last element from an array and returns it
// ==============================================
let myArray2 = [1, 2, 3, 4, 5];
myArray2.shift();
console.log(myArray2);
//  Removes the first element from an array and returns it.
// ============================================
let myArray3 = [1, 2, 3, 4, 5];
myArray3.unshift(0);
console.log(myArray3);
// Adds one or more elements to the beginning of an array and returns the new length.
// ============================================
let myArray4 = [1, 2, 3, 4, 5];
let anotherArray = [6, 7, 8, 9, 10];
let concatenatedArray = myArray4.concat(anotherArray);
console.log(concatenatedArray);
// Merges two or more arrays and returns a new array.
// ====================================================
let myArray5 = [1, 2, 3, 4, 5];
let joinedString = myArray5.join();
console.log(joinedString);
// Joins all elements of an array into a string, optionally separated by a specified separator.
// ====================================================
let myArray6 = [1, 2, 3, 4, 5];
let slicedArray = myArray6.slice(1, 4);
console.log(slicedArray);
// Extracts a section of an array and returns a new array.
// ==================================================
let myArray7 = [1, 2, 3, 4, 5];
let spliceArray = myArray7.splice(1, 3);
console.log(spliceArray);
console.log(myArray7);
// Changes the contents of an array by removing, replacing, or adding elements.
// ==============================================================
myArray.forEach((element, index, array) => {
});
// Calls a function for each element in the array.
// ============================================================
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((value, index, array) => {
    return value * 2;
});
console.log(doubled);
//  Creates a new array with the results of calling a provided function on every element in the array.
// =========================================
let Array8 = [1, 2, 3, 4, 5];
let Array08 = Array8.filter((element, index, array) => {
    return;
});
// A function that tests each element.
// ======================================================
let Array9 = [1, 2, 3, 4, 5];
let foundElement = Array9.find((element, index, array) => {
    return;
});
// A function to test for each element.
// ==============================================================
