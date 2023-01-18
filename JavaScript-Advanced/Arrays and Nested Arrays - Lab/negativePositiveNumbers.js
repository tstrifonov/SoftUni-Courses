function negativePositiveNumbers(arr) {
  const newArr = [];

  for (const element of arr) {
    if (element >= 0) {
      newArr.push(element);
    } else {
      newArr.unshift(element);
    }
  }

  console.log(newArr.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
/*
-2
7
8
9
*/
negativePositiveNumbers([3, -2, 0, -1]);
/*
-1
-2
3
0
*/
