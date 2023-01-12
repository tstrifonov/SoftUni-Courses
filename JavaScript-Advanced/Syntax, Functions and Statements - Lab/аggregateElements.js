function aggregateElements(input) {
  let sum = 0;
  let inverseSum = 0;
  let concat = "";

  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
    inverseSum += 1 / Number(input[i]);
    concat += String(input[i]);
  }

  console.log(sum);
  console.log(inverseSum);
  console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
