function sort(array, type) {
  return type === "asc"
    ? array.sort((a, b) => a - b)
    : array.sort((a, b) => b - a);
}

console.log(sort([14, 7, 17, 6, 8], "asc"));
//	[6, 7, 8, 14, 17]

console.log(sort([14, 7, 17, 6, 8], "desc"));
//	[17, 14, 8, 7, 6]
