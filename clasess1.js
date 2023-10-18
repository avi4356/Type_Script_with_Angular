"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.name = name;
        this.id = id;
    }
    Login() {
        return { name: 'Avinash singh', id: 323, email: 'test@1321gmail.com' };
    }
}
let r = new Employee(1, "Avinash singh", { street: 'Abab', city: 'delhi', state: 'delhi', pin: 232131 });
console.log(r);
