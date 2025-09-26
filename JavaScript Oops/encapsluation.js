
class Account {

    #balance;
    
    constructor( accountHolderName, initalBalance) {
           this.accountHolderName = accountHolderName;
           this.#balance = initalBalance
    }

    getBalance() {

        console.log(` your account balance is ${this.#balance}`);
    }

    deposit( amount ) {
           
        this.#balance += amount;
        console.log(amount," is successfully deposit in your account ")
    }

    withdraw ( amount ) {
        this.#balance -= amount;
        console.log( amount, " is successfully withdarw from your account")
    }

}

let user  = new Account(" Jaanvi",100)

user.getBalance();
user.deposit(2000);
user.withdraw(1000);
user.getBalance();