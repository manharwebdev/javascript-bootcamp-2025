const currentYear = 2025;
const birthYear = 2015;
let age = currentYear - birthYear;
console.log("Age:", age);
const firstName = "Manhar";
const lastName = "Hadiyal";
const message = `Hello, My Name is ${firstName} ${lastName}. I am ${age} years old.`;
console.log(message);

// Checking age for voter eligibility
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// checking user role if admin then show message you can edit product and if guest then view product only
const userRole = "guest"; // Change to "guest" to test the other condition
if (userRole === "admin") {
    console.log("Welcome Admin. You can manage the Inventory.");
} else if (userRole === "guest") {
    console.log("Welcome Guest. You can only view products.");
}   else {
    console.log("Access Denied.");
}
