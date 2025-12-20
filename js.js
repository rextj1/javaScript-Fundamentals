class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name); // call parent constructor
        this.color = color;
    }
    bark() {
        console.log(`Woof!, this ${this.name} is ${this.color}`);
    }
}

let d = new Dog("Bingo", "brown");
d.eat();  // inherited from Animal
d.bark(); // from Dog


//  class
class AccountBalance {
    #balance;
    constructor(start) {
        this.#balance = start;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    withdrawal(amount) {
        this.#balance -= amount;
        return this.#balance;
    }
}

let acctBal = new AccountBalance(100)
console.log(acctBal.deposit(50));
console.log(acctBal.deposit(50));
console.log(acctBal.withdrawal(30));
