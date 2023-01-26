function jansNotation(input) {
  let result = [];
  let operators = [];

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] == "number") {
      result.push(input[i]);
      continue;
    }

    operators.push(input[i]);

    if (result.length > 1) {
      let a = result.pop();
      let b = result.pop();
      let operator = operators.pop();
      let newNumber;
      switch (operator) {
        case "+":
          newNumber = b + a;
          break;
        case "-":
          newNumber = b - a;
          break;
        case "*":
          newNumber = b * a;
          break;
        case "/":
          newNumber = b / a;
          break;
      }
      result.push(newNumber);
    }
  }

  if (operators.length > 0) {
    console.log("Error: not enough operands!");
  } else if (result.length == 1) {
    console.log(result[0]);
  } else if (result.length > 1) {
    console.log("Error: too many operands!");
  }
}

jansNotation([3, 4, "+"]);
//7

jansNotation([5, 3, 4, "*", "-"]);
//-7

jansNotation([7, 33, 8, "-"]);
//Error: too many operands!

jansNotation([15, "/"]);
//Error: not enough operands!
