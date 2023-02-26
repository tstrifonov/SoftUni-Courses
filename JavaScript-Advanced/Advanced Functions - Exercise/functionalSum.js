/*
Write a function that adds a number passed to it to an internal 
sum and returns itself with its internal sum set to the new value, so it can be chained functionally. 
Hint: Overwrite toString() of the function. 

Input
Your function needs to take one numeric argument.
Output
Your function needs to return itself with an updated context.
*/

function add(numOne) {
  let sum = numOne;

  function calc(numTwo) {
    sum += numTwo;
    return calc;
  }

  calc.toString = function () {
    return sum;
  };

  return calc;
}

console.log(add(1)(6)(-3).toString());
