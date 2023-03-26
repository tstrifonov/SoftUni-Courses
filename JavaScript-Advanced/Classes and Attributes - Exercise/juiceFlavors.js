/*
You will be given different juices, as strings. You will also receive quantity as a number. 
If you receive a juice that you already have, you must sum the current quantity of that juice, with the given one. 
When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.
Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as many bottles as you can, 
and store what is left from the juice.

Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.

Input
The input comes as an array of strings. Each element holds data about a juice and quantity in the following format:
"{juiceName} => {juiceQuantity}"

Output
The output is the produced bottles. The bottles are to be printed in the order of obtaining the bottles. 
Check the second example below - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already created Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.
*/

function juiceFlavors(input) {
  const store = {};
  const result = {};

  for (let juice of input) {
    const [name, quantity] = juice.split(" => ");
    if (store.hasOwnProperty(name) == false) {
      store[name] = {};
      store[name].quantity = 0;
    }
    store[name].quantity += Number(quantity);
    if (store[name].quantity >= 1000) {
      if (result.hasOwnProperty(name) == false) {
        result[name] = 0;
      }
      result[name] += Math.floor(store[name].quantity / 1000);
      store[name].quantity = store[name].quantity % 1000;
    }
  }

  for (let juice of Object.entries(result)) {
    console.log(`${juice[0]} => ${juice[1]}`);
  }
}

juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
/*
Orange => 2
Peach => 2
*/

juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
/*
Pear => 8
Watermelon => 10
Kiwi => 4
*/
