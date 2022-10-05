
class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        this.balance -= amount
    }

}

let bankAccount = new BankAccount(100, "checking")    
bankAccount.deposit(50)
console.log(bankAccount)

bankAccount.withdraw(25)
console.log(bankAccount)

