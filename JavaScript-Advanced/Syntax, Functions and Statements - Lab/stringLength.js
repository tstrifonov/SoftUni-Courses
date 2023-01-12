function stringLength(stringOne, stringTwo, stringThree) {
  const lengthTotal = stringOne.length + stringTwo.length + stringThree.length;
  const lengthAverage = Math.floor(lengthTotal / 3);

  console.log(lengthTotal);
  console.log(lengthAverage);
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
