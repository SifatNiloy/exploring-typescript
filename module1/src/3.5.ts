{
//access modifier 
class BankAccount{
    public readonly id: number;
    public name: string;
    // private _balance: number; 
    // if we want that balance can be accessed from a child, we can write "protected" in stead of "private"
    protected _balance: number;


    constructor(id: number, name: string, balance :number){
        this.id= id;
        this.name= name;
        this._balance= balance;
    }
    // pulic declare na korelo by default public thake
    public addDeposit(amount: number){
        this._balance= this._balance + amount 
    }
    public getBalance(){
        return this._balance;
    }
}
class STudentAccount extends BankAccount{
    test(){
        this._balance=20;  // _balance accessed because we used "protected" in stead of "private"
    }
}

const gorbiberAccount= new BankAccount(111, "mr gorib", 20);
gorbiberAccount.addDeposit(50);
const goriberBalance= gorbiberAccount.getBalance()
console.log(goriberBalance)



}