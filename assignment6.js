const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// Display all products using forEach()
console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// Find products under $50 using filter()
console.log("\n-- Filtered Products (Price < $50) --");

const affordableProducts = products.filter(
    product => product.price < 50
);

console.log(affordableProducts);

// Create formatted strings using map()
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(productTags);