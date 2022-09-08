function condenseArrayToNumber(arr) {
    let condensedArr = [];
    for (let i = 0; i < arr.length; i ++) {
        condensedArr.push(arr[i]);
    }

    while (condensedArr.length > 1) {
        for (let i = 0; i < condensedArr.length - 1; i ++) {
            condensedArr[i] += condensedArr[i+1];
        }
        condensedArr.pop();
    }

    console.log(condensedArr[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);