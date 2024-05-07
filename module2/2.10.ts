{
//mapped type
const arrayOfNumbers: number[]=[1,4,5];
// const arrayOfStrings: string[]=['1','4','5'];
const arrayOfStrings: string[]= arrayOfNumbers.map(number=> number.toString())
console.log(arrayOfStrings)

type areaNumber={
    height: number;
    width: number;
}

type height = areaNumber["height"]  // look up type
// type areaString={
//     height: string;
//     width: string;
// }
type areaString<T>={
    [key in keyof T]: T[key]
}
const area1: areaString<{height: string, width: number}>= {
    height:"100",
    width: 50,
}
}