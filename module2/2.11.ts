{
//utility types 
//pick
type Person={
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}
type NameAge= Pick<Person,"name"| "age">

//omit
type contactInfo=Omit<Person, "name"| "age">

//required
type requiredPerson= Required<Person >

//partial
type personPartial= Partial<Person>

//read only
type personReadOnly = Readonly<Person>

const person1: personReadOnly={
    name: "mr x",
    age: 23,
    contactNo: '0234'
}
// person1.name="mer dsflk" => /cannot change name property here because it's read only

//record
// type myObj={
//     a:string,
//     b: string,
// }
type myObj= Record<string, string>

const emptyObj: Record<string, unknown>={}

const obj1: myObj ={
    a: 'aa', 
    b: 'bb',
    c: 'cc',
}

}