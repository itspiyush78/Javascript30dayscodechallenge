/*----------Variable Declaration-------------*/

// Task1: Declare a variable using var, assign it a number, and log the value to the console.

var number = 88;
console.log(number);


// Task2: Declare a variable using let, assign it a string, and log the value to the console.

let greeting = "Hello, developers";
console.log(greeting);

/*----------Constant Declaration-------------*/

// Task3: Declare a variable using const, assign it a boolen value, to the console.

const isTrue = true;
console.log(isTrue);

/*----------Data Types-------------*/

// Task4: Create a variable of diffrent data type (number, string, boolean, object, array) and log each variable type using the `typeof`  operator.

// Number
let numberVar = 88;
console.log(typeof numberVar); // Output: "number"

// String
let stringVar = "Hello, developers";
console.log(typeof stringVar); // Output: "string"

// Boolean
let booleanVar = true;
console.log(typeof booleanVar); // Output: "boolean"

// Object
let objectVar = { name: "piyush", age: 20 };
console.log(typeof objectVar); // Output: "object"

// Array
let arrayVar = [1, 2, 3, 4, 5];
console.log(typeof arrayVar); // Output: "object"

/*----------Reassigning Variables-------------*/

// Task5: Declare  a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

// Initial Declaration and Assignment
let myVariable = 20;
console.log("Initial Value:", myVariable); 

// Reassigning a New Value
myVariable = 30;
console.log("New Value:", myVariable); 

/*----------Understanding const-------------*/

// Task6: Try reassigning a variable declared with const and observe the error.

// Initial Declaration and Assignment
const myConstant = 100;
console.log("Initial Value:", myConstant); // Output: Initial Value: 100

// Attempting to Reassign
myConstant = 200; // This will cause an error
console.log("New Value:", myConstant);

