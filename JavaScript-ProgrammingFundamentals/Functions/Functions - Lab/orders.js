function orders(product, quality) {
    let price = 0;

    switch (product) {
        case "coffee": price = 1.50; break;
        case "water": price = 1.00; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2.00; break;
    }

    let totalCost = quality * price;
    console.log(totalCost.toFixed(2));
}

orders("coffee", 2);

/*
coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are: 
⦁	coffee - 1.50
⦁	water - 1.00
⦁	coke - 1.40
⦁	snacks - 2.00
*/