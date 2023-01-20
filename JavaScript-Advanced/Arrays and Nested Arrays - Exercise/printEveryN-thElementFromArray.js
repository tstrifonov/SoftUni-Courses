function printEveryNthElementFromArray(arr, n) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(printEveryNthElementFromArray(["5", "20", "31", "4", "20"], 2));
//['5', '31', '20']

console.log(printEveryNthElementFromArray(["dsa", "asd", "test", "tset"], 2));
//['dsa', 'test']
