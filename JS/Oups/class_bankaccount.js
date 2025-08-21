class BankAccount{
    #balance; // ==== private property ===

    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }

    // ===== Public method - visible to uaers =====

    deposit(amount){
        if(amount > 0){
this.#balance += amount ;
console.log(`Deposit:  ${amount}`);
        }else{
            console.log("Invalid deposit amount");
            
        }
    }

// ===== Public method - visible to uaers =====
   

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;

            console.log(`withdraw: ${amount}`);
        }else{
            console.log("Insufficient balance");            
        }
    }

 // ====== public method to show limited detail =====

checkbalance(){
    console.log(`current balance: ${this.#balance}`);
}

}

//==== creat account =====

const account = new BankAccount("Siraj");

// ====== Interact using abstracted methods ======

account.deposit(2000);
account.withdraw(1000);
account.checkbalance();

