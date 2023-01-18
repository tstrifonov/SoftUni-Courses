function biggerHalf(arr) {
  const sortredArr = arr.sort((a, b) => a - b);
  const biggerHalfArr = sortredArr.slice(Math.floor(arr.length / 2));
  return biggerHalfArr;
}

console.log(biggerHalf([4, 7, 2, 5]));
//[5, 7]
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//[7, 14, 19, 19]
