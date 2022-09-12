function nonDecreasingSubset(arr) {
    let newArr = [];
    let biggestNum = arr[0];
    newArr.push(biggestNum);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            newArr.push(biggestNum);
        }
    }

    console.log(newArr.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
nonDecreasingSubset([ 1, 2, 3, 4]); //1 2 3 4
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]); //20