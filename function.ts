//normal way used function

import { Type } from "typescript";

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(23, 43));

//using arrow function

const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(4343, 434));

//another way 

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};
console.log(mult(34, 5));

//normal way used function optional parameter

function add1(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}
console.log(add1(23, 43, 65))


//using arrow function required parmeter

const sub1 = (num1: number, num2: number, num3 = 20): number => num1 - num2 - num3;
console.log(sub(10, 20));

//Extend way another way short cut

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));

function getIteams<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatresult1 = getIteams<number>([1,2,3,4,5]);
let concaString = getIteams<string>(['a','b','c','d','e']);

console.log(concaString);
console.log(concatresult1);
