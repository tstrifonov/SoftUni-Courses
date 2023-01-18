function smallestTwoNumbers(arr) {
  const minOne = Math.min(...arr);
  arr.splice(arr.indexOf(minOne), 1);
  const minTwo = Math.min(...arr);

  return minOne + " " + minTwo;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
//5 15
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
//0 3
