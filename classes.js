"use strict";
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    //static memeber function 
    static getEmployeeCount() {
        return 50;
    }
    //creating getter and setter method 
    // get empId(): number{
    //     return this.#id;
    // }
    // set empId(id:number){
    //     this.#id = id;
    // }
    getNameWithAddress() {
        //return this.name + " " +this.address;
        return '${this.name} stays at ${this.address}';
    }
}
let john = new Employee(1, "john", "hightway 71");
let address = john.getNameWithAddress();
console.log(address);
console.log(john);
//Acessing static member function
let e = Employee.getEmployeeCount();
console.log(e);
// extends
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
}
let address1 = john.getNameWithAddress();
console.log(address1);
let mike = new Manager(2, "Mike", "chersih dreive");
console.log(mike.getNameWithAddress());
