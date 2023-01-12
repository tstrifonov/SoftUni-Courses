function sumOfNumbers(a, b) {
  let sum = 0;

  for (let i = Number(a); i <= Number(b); i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
