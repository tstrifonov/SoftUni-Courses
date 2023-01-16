function sameNumbers(input) {
  let number = (input + "").split("");
  let flag = true;
  let sum = Number(number[0]);

  for (let i = 1; i < number.length; i++) {
    sum += Number(number[i]);
    if (number[i] != number[i - 1]) {
      flag = false;
    }
  }

  console.log(flag);
  console.log(sum);
}

sameNumbers(2345678);
sameNumbers(333333333);
