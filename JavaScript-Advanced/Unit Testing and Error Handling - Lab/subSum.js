function subSum(arrayInput, startIndex, endIndex) {
    let sum = 0;
    if (!Array.isArray(arrayInput)) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > (arrayInput.length - 1)) {
        endIndex = arrayInput.length - 1;
    }

    for (let index = startIndex; index < endIndex + 1; index++){
        if (typeof arrayInput[index] !== "number") {
            return NaN;
        }
        sum += arrayInput[index];
    }
    
    return sum
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
//	150

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
//	3.3

console.log(subSum([10, 'twenty', 30, 40], 0, 2));
//	NaN

console.log(subSum([], 1, 2));
//	0

console.log(subSum('text', 0, 2));
//	NaN
