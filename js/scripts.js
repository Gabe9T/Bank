function BankAccount(firstName, lastName, balance, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.email = email;
}



BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        this.balance = "Account balance insufficient. Please enter new amount."
    }
};

// UI Logic
function formHandler(event) {
    event.preventDefault();
    document.getElementById("Result").setAttribute("class","");
    const firstNameInput = document.querySelector("input[name='firstName']").value;
    const lastNameInput = document.querySelector("input[name='lastName']").value;
    const EmailInput = document.querySelector("input[name='inputEmail']").value;
    const balanceInput = parseFloat(document.querySelector("input[name='inputBalance']").value);
    const depositInput = parseFloat(document.querySelector("input[name='inputDeposit']").value);
    const withdrawalInput = parseFloat(document.querySelector("input[name='inputwithdrawal']").value);

// Perform deposit and withdrawal
account.deposit(depositInput);
account.withdraw(withdrawalInput);

// Display the result
document.getElementById("result").textContent = `New Balance: $${account.balance.toFixed(2)}`;
}

window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#bankForm");
    form.addEventListener("submit", formHandler);
});

window.addEventListener("onclick", function () {
    const form = document.querySelector("#bankForm2");
    form.addEventListener("submit", formHandler);
});