//function

//normal function
//arrow function

function add(num1: number, num2: number=10):number{
    return num1+num2;
}
const addArrow=(num1:number,num2:number):number=> num1+num2;
add(2, 5)
addArrow(4,6)

// if function is in an object, it is called method
const poorUser= {
    name: 'Sawom', 
    balance: 0,
    addBalance(balance: number):string{
        return `my new balance is: ${this.balance+ balance}`;
    }

    //poorUser is an object, which method is addBalance
}

const arr:number[]=[1, 4, 23];
const newArray: number[]= arr.map((elememt :number): number => elememt* elememt);