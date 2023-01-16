function greatestCommonDivisor(numberOne, numberTwo) {
  let greatestDivisor;

  for (let i = 1; i <= numberOne; i++) {
    if (numberOne % i == 0 && numberTwo % i == 0) {
      greatestDivisor = i;
    }
  }

  console.log(greatestDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
