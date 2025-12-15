// Example inventory array
const inventory = ["Keyboard", "Mouse", "Monitor"];
console.log("Initial Inventory:", inventory);

// 3. Modify the Array
inventory.push("Headphones"); // Add new item
console.log("Added Headphones:", inventory);

inventory.pop(); // Remove the last item (Headphones go away? No, wait... try it)
console.log("Removed last item:", inventory);

inventory[1] = "Gaming Mouse"; // Upgrade the Mouse
console.log("Updated Inventory:", inventory);