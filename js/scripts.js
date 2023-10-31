function BankAccount(firstName, lastName, balance, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.email = email;
}



BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        this.balance = "Account balance insufficient. Please enter new amount."
    }
};

// UI Logic

let account = new BankAccount()

function formHandler(event) {
    event.preventDefault();
    document.getElementById("result").setAttribute("class", "");
    const firstNameInput = document.querySelector("input[name='firstName']").value;
    const lastNameInput = document.querySelector("input[name='lastName']").value;
    const EmailInput = document.querySelector("input[name='inputEmail']").value;
    const balanceInput = parseFloat(document.querySelector("input[name='inputBalance']").value);
    const depositInput = parseFloat(document.querySelector("input[name='inputDeposit']").value);
    const withdrawalInput = parseFloat(document.querySelector("input[name='inputwithdrawal']").value);

    account = new BankAccount(firstNameInput, lastNameInput, balanceInput, EmailInput)
    // Perform deposit and withdrawal
    document.getElementById("balance").textContent = `New Balance: $${account.balance}`;
}

window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#bankForm");
    form.addEventListener("submit", formHandler);
});

window.addEventListener("onclick", function () {
    const form = document.querySelector("#bankForm2");
    form.addEventListener("submit", formHandler);
});



