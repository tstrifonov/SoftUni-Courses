function fruit(fruit, quantity, price) {
  const total = (quantity / 1000) * price;
  console.log(
    `I need $${total.toFixed(2)} to buy ${(quantity / 1000).toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
