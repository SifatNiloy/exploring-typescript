{
//generic constraints of keyof operator
type vehicle={
    bike: string;
    car: string;
    ship: string;
}
type owner= "Bike" | "car" | "ship" ; //manually

type owner2= keyof vehicle;
const person1: owner ="Bike";

const getPropertyByValue=<X, Y extends keyof X>(obj: X, key: Y)=>{
    return obj[key];
}
const user ={
    name: 'Mr sifat', 
    age: 26,
    address: "patu",
}

const car ={
   model: 'toyota',
   year: '2000'
}
const result1= getPropertyByValue(user, 'name')
const result2= getPropertyByValue(car, 'model')
}