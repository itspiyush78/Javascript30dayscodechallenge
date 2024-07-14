/*----------Reassignment Demo-------------*/

// Create a script that demonstrates the difference behavior between let and const when it comes to reassignment.

// Using let
let myLetVar = 10;
console.log("Initial value of myLetVar:", myLetVar); // Output: 10

// Reassigning let variable
myLetVar = 20;
console.log("Reassigned value of myLetVar:", myLetVar); // Output: 20


// Using const
const myConstVar = 30;
console.log("Initial value of myConstVar:", myConstVar); // Output: 30

// Attempting to reassign const variable
try {
    myConstVar = 40; // This will cause an error
} catch (error) {
    console.log("Error when reassigning myConstVar:", error.message); // Output: Error message
}
