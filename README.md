Description: To create a form that allows the user to sign-up for a new bank account. The account will allow the user to make deposits and withdrawals. After every transaction, the user will be shown the new account balance. 

Test 1: Create a new bank account that takes user name and an initial deposit.
Code: User name: John Doe; user initial deposit: $1000
Expected Result: A new bank accout object with a balance of $1000

Test 2: Make a deposit to the existing bank account
Code: Deposit $500
Result: New account balance of $1500

Test 3: Make a withdrawal from the existing bank account
Code: Withdrawal $700
Result: New account balance of $800

Test 4: Attempt withdrawal with insuffficient balance
Code: Withdrawal of $1000
Result: Error indicating insufficient funds; reminder of current balance

Test 5: Get current balance of the account
Code: Account balance inquiry
Result: Balance of $800

Test 6: Check account holders account number
Code: Input users name
result: The account number 
