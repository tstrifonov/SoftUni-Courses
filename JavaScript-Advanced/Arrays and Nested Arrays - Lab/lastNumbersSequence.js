function lastNumbersSequence(n, k) {
  const arr = [1];

  while (arr.length < n) {
    let newElement = 0;
    for (let i = arr.length - 1; i > arr.length - 1 - k && i >= 0; i--) {
      newElement += arr[i];
    }
    arr.push(newElement);
  }

  return arr;
}

console.log(lastNumbersSequence(6, 3));
//[1, 1, 2, 4, 7, 13]
console.log(lastNumbersSequence(8, 2));
//[1, 1, 2, 3, 5, 8, 13, 21]
