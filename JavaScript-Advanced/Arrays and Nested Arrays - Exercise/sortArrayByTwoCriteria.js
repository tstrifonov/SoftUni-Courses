function sortArrayByTwoCriteria(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  return arr.join("\n");
}

console.log(sortArrayByTwoCriteria(["alpha", "Beta", "gamma"]));
/*
alpha
Beta
gamma
*/

console.log("-------------------");

console.log(
  sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
);
/*
Jack
Isacc
George
Theodor
Harrison
*/

console.log("-------------------");

console.log(sortArrayByTwoCriteria(["test", "Deny", "omen", "Default"]));
/*
Deny
omen
test
Default
*/
