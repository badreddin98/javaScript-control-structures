// JavaScript Basics Assignment
// Name: Badreddin Elyazgi
// Date: 12/06/2024

// Part 1: Online Shopping Experience
console.log("Part 1 - Shopping Cart:")

// Task 1: Check if user is logged in
let loggedIn = true;  // Simple login check

// Task 2: Cart items
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

// Check if user is logged in and show cart
if (loggedIn) {
    console.log("You are logged in! Here's what's in your cart:");
    // Loop through cart items
    for (let i = 0; i < cart.length; i++) {
        console.log(`Item ${i + 1}: ${cart[i]}`);
    }
} else {
    console.log("Sorry, you need to log in to see your cart!");
}

// Part 2: Banking System
console.log("\nPart 2 - Banking System:")

// Starting balance
let bankBalance = 100;  // Starting with $100

// Task 1: Deposit function
function makeDeposit(amount) {
    bankBalance = bankBalance + amount;
    console.log(`You deposited $${amount}!`);
    console.log(`Your new balance is $${bankBalance}`);
}

// Task 2: Withdrawal function
function makeWithdrawal(amount) {
    if (amount <= bankBalance) {
        bankBalance = bankBalance - amount;
        console.log(`You withdrew $${amount}!`);
    } else {
        console.log("Sorry, you don't have enough money!");
    }
    console.log(`Your new balance is $${bankBalance}`);
}

// Task 3: Check balance function
function checkMyBalance() {
    console.log(`Your current balance is $${bankBalance}`);
}

// Testing my banking functions
console.log("\nTesting my banking functions:");
checkMyBalance();           // Should show $100
makeDeposit(50);           // Adding $50
makeWithdrawal(30);        // Taking out $30
makeWithdrawal(200);       // Trying to take out too much
checkMyBalance();          // Final balance check
