{

//ternary operator
const age: number = 18;
if(age>=18){
    console.log("Adult")
}
else{
    console.log("not adult")
}

const isAdult = age>= 18? "adult" : "not adult";
console.log({isAdult})

//nullish coalescing operator
//  null / undefined er oper decession making
const isAuthenticated ="";
const result1= isAuthenticated ?? "Guest";
const result2 = isAuthenticated? isAuthenticated: "Guest";
console.log({result1},{result2})

//optional chaingn
type User= {
    name: String;
    address: {
        city: string;
        road: number;
        presentAddress: string;
        permanentAddress: string;
    }
}
const user: User= {
    name:'sifat',
    address: {
        city: 'Dhaka',
        road: 23,
        presentAddress: "motijheel",
        permanentAddress: "motijheel"
    }
}
// ??= nullish coalescing operator
const myAddress= user?.address?.permanentAddress  ?? "no permanent address";
console.log({myAddress})

}