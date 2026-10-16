let billAmount = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let tipAmount = billAmount * tipPercentage / 100;
let totalAmount = billAmount;

totalAmount += tipAmount;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tipAmount);
console.log("Total Amount to Pay: $" + totalAmount);