// 1. Create an Object
const person = {
    firstName: "Manhar",    // Key: Value
    lastName: "Hadiyal",
    age: 24,
    isDeveloper: true,
    skills: ["HTML", "CSS", "JS"] // You can put an Array inside an Object!
};

// 2. Read Data (Dot Notation)
console.log("First Name:", person.firstName);
console.log("Age:", person.age);
console.log("Top Skill:", person.skills[2]); // Accessing index 2 of the array

// 3. Update Data
person.age = 25; // Happy Birthday!
person.city = "Vadodara"; // Adding a NEW property that didn't exist before

console.log("Updated Person:", person);
// Test: change developer status and print it
person.isDeveloper = false;
console.log("isDeveloper now:", person.isDeveloper);