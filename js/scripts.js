// Test 1: Create a new bank account that takes user first, last name and phone number.
// Test 2: Have a unique ID assigned to the account at creation.
// Test 3: Make a deposit to the existing bank account.
// Test 4: Make a withdrawal from the existing bank account.
// Business Logic
function BankAccount(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient balance");
    }
};

// UI Logic
function formHandler(event) {
    event.preventDefault();
    const firstNameInput = document.querySelector("input[name='firstName']").value;
    const lastNameInput = document.querySelector("input[name='lastName']").value;
    const balanceInput = parseFloat(document.querySelector("input[name='inputBalance']").value);
    const depositInput = parseFloat(document.querySelector("input[name='inputDeposit']").value);
    const withdrawalInput = parseFloat(document.querySelector("input[name='inputwithdrawal']").value);

    const account = new BankAccount(firstNameInput, lastNameInput, balanceInput);

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
