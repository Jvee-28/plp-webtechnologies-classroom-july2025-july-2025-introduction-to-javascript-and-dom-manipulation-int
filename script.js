// Part 1: Variables, Data Types & Conditionals
let userName = prompt("What's your name?");
let userAge = parseInt(prompt("How old are you?"));

if (userAge >= 18) {
    console.log(`Hello, ${userName}. You are an adult.`);
} else {
    console.log(`Hello, ${userName}. You are underage.`);
}

// Part 2: Custom Functions

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}

console.log("Total price:", calculateTotal(100, 0.16));

// Function 2: Format a welcome message
function welcomeMessage(name) {
    return `Welcome, ${name}! Ready to learn JavaScript?`;
}

console.log(welcomeMessage(userName));

// Part 3: Loops

// Loop 1: Countdown from 5
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}

// Loop 2: Display an array of fruits
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// Part 4: DOM Interactions

// 1. Change text content
document.getElementById("title").textContent = "JavaScript DOM in Action!";

// 2. Add event listener to button
document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("message").textContent = "Button clicked! Here's a list of numbers:";

    // 3. Create dynamic list
    const list = document.getElementById("numberList");
    list.innerHTML = ""; // Clear any existing items
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
});
