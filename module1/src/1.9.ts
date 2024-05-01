{
    
    //type alias
  // typename starts with capital letter , here "S" tudent ... 
type Student={
    name: string;
    age: number;
    gender: string;
    contactNo?:string;
    address: string;
}

const student1:Student={
    name: 'sifat',
    age: 25,
    gender: 'male',
    contactNo: '2398489',
    address: "dhaka",
}
const student2:Student={
    name: 'niloy',
    age: 26,
    gender: 'male',
    address: "dhaka",
}

type UserName= string
type IsAdmin =boolean

const username: UserName = "Sifat"
const isAdmin: IsAdmin = true


const add=(num1: number, num2: number):number=> num1+num2;
//typealias for a function
type ADD = (num1: number, num2: number)=> number;

const addNumbers: ADD =(num1, num2):number=> num1+num2;

}