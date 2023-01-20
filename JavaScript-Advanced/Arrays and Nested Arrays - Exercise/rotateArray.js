function rotateArray(arr, n) {
  let newArr = arr.slice();
  for (let i = 1; i <= n; i++) {
    let element = newArr.pop();
    newArr.unshift(element);
  }

  return newArr.join(" ");
}

console.log(rotateArray(["1", "2", "3", "4"], 2));
//3 4 1 2

console.log(rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15));
//Orange Coconut Apple Banana
