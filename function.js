"use strict";
//normal way used function
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(23, 43));
//using arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(4343, 434));
//another way 
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(34, 5));
//normal way used function optional parameter
function add1(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add1(23, 43, 65));
//using arrow function required parmeter
const sub1 = (num1, num2, num3 = 20) => num1 - num2 - num3;
console.log(sub(10, 20));
//Extend way another way short cut
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
function getIteams(items) {
    return new Array().concat(items);
}
let concatresult1 = getIteams([1, 2, 3, 4, 5]);
let concaString = getIteams(['a', 'b', 'c', 'd', 'e']);
console.log(concaString);
console.log(concatresult1);
