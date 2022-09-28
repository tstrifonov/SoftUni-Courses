function smallestTwoNumbers(arr) {
   let sortedArr = arr.slice().sort((a, b) => a - b);
   console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
