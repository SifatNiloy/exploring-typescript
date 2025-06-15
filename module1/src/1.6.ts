"use strict";

// ---------- Function Basics ----------

// Normal function declaration with default parameter
function add(num1: number, num2: number = 10): number {
    // num2 has a default value of 10 if not provided when calling the function
    return num1 + num2; // returns the sum of num1 and num2
}

// Arrow function expression
const addArrow = (num1: number, num2: number): number => num1 + num2;
// Arrow functions provide a shorter syntax for writing functions

// Calling the functions
add(2, 5);       // returns 7 (2 + 5)
add(4);          // returns 14 (4 + 10, since num2 defaults to 10)
addArrow(4, 6);  // returns 10 (4 + 6)

// ---------- Functions inside Objects (Methods) ----------

// Object representing a user with a balance
const poorUser = {
    name: 'Sawom',
    balance: 0,

    // Method inside the object — a function property
    addBalance(balance: number): string {
        // 'this' refers to the current object (poorUser)
        // Adds the given balance to the current balance and returns a message string
        return `my new balance is: ${this.balance + balance}`;
    }
    // This method can be called as poorUser.addBalance(50);
};

// ---------- Array Higher-Order Function ----------

// Array of numbers
const arr: number[] = [1, 4, 23];

// Using 'map' method to create a new array with each element squared
// 'map' takes a function that runs on each element and returns the transformed element
const newArray = arr.map((element) => element * element);
// newArray is now [1, 16, 529]

// Explanation:
// - 'map' does NOT change the original array; it returns a new one
// - Arrow function here takes each 'element' and returns its square
