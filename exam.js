// 1. The Scores
let scores = [45, 90, 30, 75, 60, 100, 49];

// 2. The Counter (Start at 0)
let passCount = 0;

// 3. The Loop (Go through every student)
for (let i = 0; i < scores.length; i++) {
    
    // 4. The Logic (Check Pass/Fail)
    if (scores[i] >= 50) {
        console.log(`Score ${scores[i]}: PASSED ✅`);
        passCount = passCount + 1; // Increase the counter
    } else {
        console.log(`Score ${scores[i]}: FAILED ❌`);
    }
}

// 5. The Final Report
console.log("-----------------------");
console.log(`Total Students Passed: ${passCount}`);