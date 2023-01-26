function calorieObject(input) {
  let result = {};

  for (let i = 0; i < input.length; i++) {
    let key = input[i];
    i++;
    let value = Number(input[i]);

    result[key] = value;
  }

  return result;
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
//{ Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
//{ Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
