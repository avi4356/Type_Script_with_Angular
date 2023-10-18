"use strict";
//creting interface
//using interface as types
//implementing interface 
//extending interfasce
//optional properties
//object destructring
//array destruturing
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'Avinash singh', id: 323, email: 'test@1321gmail.com' };
console.log(user);
let Employees1 = { name: 'Avinash singh', id: 323, email: 'test@1321gmail.com', salary: 1424 };
console.log(Employees1);
let [user1, user2, ...restUsers] = [
    { name: "Avinash singh1", id: 1, email: "" },
    { name: "Avinash singh2", id: 2, email: "" },
    { name: "Avinash singh3", id: 3, email: "" },
    { name: "Avinash singh4", id: 4, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 0);
console.log(result);
