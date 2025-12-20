function accountBalance(start) {
    let balance = start;

    return {
        deposit: (amount) => { 
            return balance + amount
        },

        withdrawal(amount) {
            return balance - amount
        }
    }
}

let acctBal = accountBalance(100);

console.log(acctBal.deposit(50));
console.log(acctBal.withdrawal(30));

// counter example
function makeClickCounter(buttonId) {
    let count = 0;
    let button = document.createElement('button');
    button.textContent = 'Click Me'
    button.addEventListener("click", () => {
        count++;
        console.log("Clicked:", count);
    });
    document.body.append(button);
}

makeClickCounter("btn1");


