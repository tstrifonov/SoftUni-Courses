function lowestPricesInCities(input) {
  let products = {};
  for (let entry of input) {
    let [townName, productName, productPrice] = entry.split(" | ");
    productPrice = Number(productPrice);
    if (products.hasOwnProperty(productName) == false) {
      products[productName] = {};
    }
    products[productName][townName] = productPrice;
  }

  for (let product in products) {
    let productLowestPrice = Object.values(products[product]);
    productLowestPrice = Math.min(...productLowestPrice);
    let townName = Object.values(products[product]).indexOf(productLowestPrice);
    townName = Object.keys(products[product])[townName];
    console.log(`${product} -> ${productLowestPrice} (${townName})`);
  }
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
