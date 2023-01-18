function sumFirstAndLast(arr) {
  return Number(arr[0]) + Number(arr[arr.length - 1]);
}

console.log(sumFirstAndLast(["20", "30", "40"]));
//60
console.log(sumFirstAndLast(["5", "10"]));
//15
