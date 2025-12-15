const numbers = [5000, 12000, 3000, 9000, 15000, 4000];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Max value:", max);
