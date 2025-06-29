"use strict";
//function
//normal function
//arrow function
function add(num1, num2 = 10) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
add(2, 5);
addArrow(4, 6);
// if function is in an object, it is called method
const poorUser = {
    name: 'Sawom',
    balance: 0,
    addBalance(balance) {
        return `my new balance is: ${this.balance + balance}`;
    }
    //poorUser is an object, which method is addBalance
};
const arr = [1, 4, 23];
const newArray = arr.map((elememt) => elememt * elememt);
