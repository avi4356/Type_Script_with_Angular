//import {Login,User} from './interface'
import * as UserLogin from './interface'

interface Address {
    street: string;
    city: string;
    state: string;
    
    pin: number;
}

class Employee implements UserLogin.Login {
    address: Address;
    name: string;
    id: number;

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.name = name;
        this.id = id;

    }
    Login(): UserLogin.User {
        return  {name:'Avinash singh',id:323,email:'test@1321gmail.com'}
    }

}

let r = new Employee(1, "Avinash singh", { street: 'Abab', city: 'delhi', state: 'delhi', pin: 232131 });
console.log(r);