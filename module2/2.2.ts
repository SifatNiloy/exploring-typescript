{
type user1={
    name: string;
    age: number;
}
type userWithRole1= user1 & {role: string }
//interface
interface user2{
    name: string
    age: number;
}
interface userWithRole2 extends user2{
    role: 'string';
}
const user1: userWithRole1={
    name: "sifat",
    age: 26,
    role: 'programmar'
}


type rollNumber = number;

type Roll1= number[];

const rollNumber1: Roll1 = [1,2,3];

interface Roll2{
    [index: number]: number;
}
//
type Add1= (num1: number, num2: number)=> number;

interface Add2{
    (num1: number, num2: number): number;
}
const add: Add2 = (num1, num2)=> num1+ num2;
}