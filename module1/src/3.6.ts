{
    //getter and setter 
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
    
    
        constructor(id: number, name: string, balance :number){
            this.id= id;
            this.name= name;
            this._balance= balance;
        }
        
        // public addDeposit(amount: number){
        //     this._balance= this._balance + amount 
        // }
        // public getBalance(){
        //     return this._balance;
        // }

        //setter
        set deposit(amount: number){
            this._balance= this.balance+ amount
        }

        //getter 
        get balance(){
            return this._balance;
        }
    }
    class STudentAccount extends BankAccount{
        test(){
            this._balance=20;  
        }
    }
    
    const gorbiberAccount= new BankAccount(111, "mr gorib", 50);
    // gorbiberAccount.addDeposit(50); //function call korte hocche
    // const goriberBalance= gorbiberAccount.getBalance()  //function call korte hocche
    // console.log(goriberBalance)

    gorbiberAccount.deposit= 50;
    const myBalance= gorbiberAccount.balance; //property er moto kore
    console.log(myBalance);
    
    
    
    }