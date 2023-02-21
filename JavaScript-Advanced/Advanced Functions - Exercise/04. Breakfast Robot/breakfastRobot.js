function solution() {
  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const recipes = {
    apple: {
      protein: 0,
      carbohydrate: 1,
      fat: 0,
      flavour: 2,
    },
    lemonade: {
      protein: 0,
      carbohydrate: 10,
      fat: 0,
      flavour: 20,
    },
    burger: {
      protein: 0,
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      carbohydrate: 0,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  const commandsObj = {
    restock,
    prepare,
    report,
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
    const entries = Object.entries(recipes[recipe]);

    for (let ingredient of entries) {
      const neededQuality = ingredient[1] * Number(quantity);
      const ownedQuality = ingredients[ingredient[0]];
      if (neededQuality <= ownedQuality) {
        ingredients[ingredient[0]] -= neededQuality;
      } else {
        return `Error: not enough ${ingredient[0]} in stock`;
      }
    }
    return "Success";
  }

  //report - returns information about the stored microelements, in the order described below, including zero elements
  function report() {
    let result = [];
    Object.entries(ingredients).forEach((ingredient) =>
      result.push(`${ingredient[0]}=${ingredient[1]}`)
    );
    return result.join(" ");
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
