// Outer Loop: Hours (Runs 2 times)
for (let hour = 1; hour <= 2; hour++) {
    
    console.log(`--- Hour ${hour} Starts ---`);
    
    // Inner Loop: Minutes (Runs 60 times FOR EACH Hour)
    for (let minute = 0; minute < 60; minute++) {
        
        // Logic: Print only interesting minutes to save screen space
        if (minute === 0 || minute === 30 || minute === 59) {
            console.log(`Time: ${hour}:${minute}`);
        }
    }
}