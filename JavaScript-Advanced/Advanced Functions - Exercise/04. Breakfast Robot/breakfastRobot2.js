function solution() {
  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const commandsObj = {
    restock,
    prepare,
    report,
  };

  const recipes = {
    apple,
    lemonade,
    burger,
    eggs,
    turkey,
  };

  function breakfastRobot(order) {
    const commands = order.split(" ");
    const task = commands.shift();
    return commandsObj[task](commands);
  }

  //restock <microelement> <quantity> - increases the stored quantity of the given microelement
  function restock(input) {
    const [item, quantity] = input;
    ingredients[item] += Number(quantity);
    return "Success";
  }

  //prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
  function prepare(input) {
    const [recipe, quantity] = input;
    return recipes[recipe](Number(quantity));
  }

  //report - returns information about the stored microelements, in the order described below, including zero elements
  function report() {
    let result = [];
    Object.entries(ingredients).forEach((ingredient) =>
      result.push(`${ingredient[0]}=${ingredient[1]}`)
    );
    return result.join(" ");
  }

  // ⦁	apple - made with 1 carbohydrate and 2 flavour
  function apple(quantity) {
    return cook("apple", 0, 1, 0, 2, quantity);
  }
  // ⦁	lemonade - made with 10 carbohydrate and 20 flavour
  function lemonade(quantity) {
    return cook("lemonade", 0, 10, 0, 20, quantity);
  }
  // ⦁	burger - made with 5 carbohydrate, 7 fat and 3 flavour
  function burger(quantity) {
    return cook("burger", 0, 5, 7, 3, quantity);
  }
  // ⦁	eggs - made with 5 protein, 1 fat and 1 flavour
  function eggs(quantity) {
    return cook("eggs", 5, 0, 1, 1, quantity);
  }
  // ⦁	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
  function turkey(quantity) {
    return cook("turkey", 10, 10, 10, 10, quantity);
  }

  function cook(
    item,
    proteinNeeded,
    carbohydrateNeeded,
    fatNeeded,
    flavourNeeded,
    quantity
  ) {
    let result = "";
    let flag = true;
    const ingredientsNeeded = [
      proteinNeeded,
      carbohydrateNeeded,
      fatNeeded,
      flavourNeeded,
    ];
    const ingredientsArray = Object.entries(ingredients);

    for (let i = 0; i < 4; i++) {
      if (ingredientsArray[i][1] < ingredientsNeeded[i] * quantity) {
        flag = false;
        result += `Error: not enough ${ingredientsArray[i][0]} in stock`;
        break;
      } else {
        ingredients[ingredientsArray[i][0]] -= ingredientsNeeded[i] * quantity;
      }
    }

    if (flag) {
      result += "Success";
    }

    return result;
  }

  return breakfastRobot;
}

let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

/*
Success
Error: not enough carbohydrate in stock
Success
Success
Success
Success
Success
protein=0 carbohydrate=4 fat=3 flavour=55
*/
