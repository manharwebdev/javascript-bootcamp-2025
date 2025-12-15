// 1. The Cart (Prices)
let prices = [200, 500, 1500, 800, 3000, 100];

// 2. The Register (Start at 0)
let total = 0;

// 3. The Scan (Loop)
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i]; // Add current price to the total
    // Visualization (Optional - helps you see it happen)
    console.log(`Adding ${prices[i]}, new total is: ${total}`);
}

// 4. The Receipt
console.log("--------------------");
console.log(`Final Total Bill: ₹${total}`);

// 1. Setup
let myMoney = 500;
let itemPrice = 150;

// 2. The Loop (Runs ONLY if money is enough)
console.log("--- STARTING SHOPPING SPREE ---");

while (myMoney >= itemPrice) {
    console.log(`I have ₹${myMoney}. Buying item...`);
    myMoney = myMoney - itemPrice; // Pay the money
}

// 3. The End
console.log(`I am broke! Money left: ₹${myMoney}`);