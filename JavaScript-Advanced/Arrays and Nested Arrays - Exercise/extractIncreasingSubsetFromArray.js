function extractIncreasingSubsetFromArray(arr) {
  let newArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (newArr[newArr.length - 1] <= arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  extractIncreasingSubsetFromArray([1, 3, 8, 8, 4, 10, 12, 3, 2, 24])
);
//[1, 3, 8, 10, 12, 24]

console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));
//[20]
