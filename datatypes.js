"use strict";
//01.String -- datatypes
let lname;
lname = 'Avinash Singh';
//02.Method reference -- datatypes
let newname = lname.toUpperCase();
console.log(newname);
//03.number -- datatypes
let age;
age = 25;
age = 25.5;
let dob = '25';
let r = parseInt(dob);
console.log(r);
//04.boolean --datatypes
let isValid = false;
console.log(isValid);
//Array --datatypes
let empList;
empList = ["Avi", "sani", "fani", "afa"];
console.log(empList);
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numList);
//filter function 
let results = numList.filter((num) => num > 2);
console.log(results);
//find function
let num = numList.find((num) => num == 2);
console.log(num);
//array of the sum of the number 
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.blue */;
//tople --datatypes
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
//any --datatypes(any data type not uesd majorly)
let department;
department = 'it';
department = 10;
//void and never --datatypes
