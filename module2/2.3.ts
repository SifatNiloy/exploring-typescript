{
//generic
// const rollNumbers: number[]= [3,6, 8];
// const mentors: string[]= ["Mr. X", "Mr Y", "Mr Z"];
// const mentors: Array<string>=["Mr. X", "Mr Y", "Mr Z"];


// const boolArray: boolean[]=[true, false, true];
// const boolArray: Array<boolean>=[true, false, true];

// type genericArray<param>= Array<param>
type genericArray<T>= Array<T>
const rollNumbers:genericArray<number>= [3,6, 8];
const mentors: genericArray<string>=["Mr. X", "Mr Y", "Mr Z"];
const boolArray: Array<boolean>=[true, false, true];


const user : genericArray<{name: string, age: number}>=[
    {
        name: 'Mezba',
        age: 23,
    },
    {
        name: 'kish',
        age: 25,
    },
    {
        name: 'Metga',
        age: 24,
    },
]

//generic tuple
// const manush:[string: string] =['Mr x', 'Ms y']
type genericTuple<x, y>=[x, y]
const manush: genericTuple<string, string> =['Mr x', 'Ms y']

const userWithId: genericTuple<number, {name: string, email: string}>=[1234, {name: "sifat", email:"sifat@gmail.com"}]

}