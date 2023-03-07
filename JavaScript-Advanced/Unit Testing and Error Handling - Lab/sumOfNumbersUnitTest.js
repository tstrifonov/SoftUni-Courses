function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}
console.log(sum("Random test"));
console.log(sum([5, 4, 5, 6]));
console.log(sum([5, "Tisho", 5, 6]));
/*
Your tests will be supplied with a function named 'sum()'. It should meet the following requirements:
Take an array of numbers as an argument
Return the sum of the values of all elements inside the array
*/

describe("Test if function works properly.", function () {
  it("Should check if input is array", function () {
    if (sum("Random test") !== NaN) {
      throw new Error("Argument is not an array of numbers");
    }
  });

  it("Return the sum of the values of all elements inside the array", function () {
    if (sum([5, 4, 5, 6]) !== 20) {
      throw new Error("Incorect sum!");
    }
  });

  it("Should check if all elements are numbers", function () {
    if (sum([5, "Tisho", 5, 6]) !== NaN) {
      throw new Error("Does not check if all elements are numbers");
    }
  });
});
