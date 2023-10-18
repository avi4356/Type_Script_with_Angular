//creting interface
//using interface as types
//implementing interface 
//extending interfasce
//optional properties
//object destructring
//array destruturing

export interface User{
    name:string;
    age?:number;
    id:number;
    email:string;

}

let user:User = {name:'Avinash singh',id:323,email:'test@1321gmail.com'}
console.log(user);



//optinal property

interface Employees extends User{
    salary:number;

}
let Employees1:Employees = {name: 'Avinash singh', id: 323, email: 'test@1321gmail.com', salary: 1424}
console.log(Employees1)

//module cs

export interface Login{
    Login() : User
}

let [user1,user2,...restUsers]:User[] =[
    {name:"Avinash singh1",id:1,email:""},
    {name:"Avinash singh2",id:2,email:""},
    {name:"Avinash singh3",id:3,email:""},
    {name:"Avinash singh4",id:4,email:""}
];

console.log(user1)
console.log(user2)
console.log(restUsers)

let result = restUsers.filter(user => user.id>0)
console.log(result)