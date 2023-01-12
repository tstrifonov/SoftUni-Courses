function mathOperations(a, b, operator) {
  const operators = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
    "%": a % b,
    "**": a ** b,
  };

  console.log(operators[operator]);
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
