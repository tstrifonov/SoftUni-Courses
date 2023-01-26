function storeCatalogue(input) {
  let products = {};
  for (let product of input) {
    let [productName, productPrice] = product.split(" : ");
    productPrice = Number(productPrice);
    products[productName] = productPrice;
  }

  let entries = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let firstLetter = entries[0][0].split("")[0].toUpperCase();
  console.log(firstLetter);

  for (let entry of entries) {
    let productName = entry[0];
    let productValue = entry[1];
    if (productName.split("")[0].toUpperCase() != firstLetter) {
      firstLetter = productName.split("")[0].toUpperCase();
      console.log(firstLetter);
    }
    console.log(`  ${productName}: ${productValue}`);
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/

storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
/*
B
  Banana: 2
  Barrel: 10
P
  Pesho: 0.000001
R
  Rali Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
*/
