console.log("--- Initializing Inventory System ---");

// Pre-existing products
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get new product details from the user
let productName = prompt("Enter the new product name:");
let productPrice = Number(prompt("Enter the product price:"));

// Validate input using if...else
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details. Please enter a valid name and price.");
} else {
    // Add the new product
    productName = productName.trim();

    inventory.push({
        name: productName,
        price: productPrice
    });

    // Assign categories using switch
    function getCategory(price) {
        switch (true) {
            case price < 100:
                return "Budget";
            case price < 500:
                return "Standard";
            default:
                return "Premium";
        }
    }

    // Display inventory using forEach
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(function(product) {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
        );
    });

    // Calculate total inventory value using a function
    function calculateTotal(items) {
        let total = 0;

        for (const item of items) {
            if (item.price <= 0) {
                continue;
            }

            total += item.price;
        }

        return total;
    }

    // Arrow function for applying tax or discount
    const calculateFinalPrice = (price, rate = 0, type = "tax") => {
        if (type === "discount") {
            return price - price * rate / 100;
        }

        return price + price * rate / 100;
    };

    // Financial analytics
    console.log("\n--- Financial Analytics ---");

    console.log(
        "Total Inventory Value: $" + calculateTotal(inventory)
    );

    // Filter affordable products
    const affordableItems = inventory.filter(
        product => product.price < 200
    );

    console.log(
        "Filtered Affordable Items (Under $200):",
        JSON.stringify(affordableItems.map(product => product.name))
    );

    // Create formatted report using map
    const report = inventory.map(
        product => `${product.name.toUpperCase()}: $${product.price}`
    );

    console.log("Formatted Report List:", JSON.stringify(report));

    // Demonstrate tax and discount calculations
    console.log(
        "Price after 10% tax on $100: $" + calculateFinalPrice(100, 10)
    );

    console.log(
        "Price after 10% discount on $100: $" +
        calculateFinalPrice(100, 10, "discount")
    );
}