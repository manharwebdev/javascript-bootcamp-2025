let name = "Manhar";
// Define the funcation (The Recipe)
function greet(name) {
    console.log("--------------");
    console.log(`Hello,${name}!`);
    console.log("Weclome to the Code Lab");
    console.log("--------------");

}

// Call the function (Follow the Recipe)
greet("Manhar");
greet("Hadiyal");
greet("Guest");

// i can write functions who calculate sum of two numbers
function addNumbers(a, b) {
    return a + b;
}

console.log("Sum:", addNumbers(5, 10));

const multiplyNumbers = (a, b) => {
    return a * b;
}           

console.log("Multiplication:", multiplyNumbers(5, 10)); 
// The Ultra-Short Version
const subtractNumbers = (a, b) => a - b;
console.log("Subtraction:", subtractNumbers(10, 5));