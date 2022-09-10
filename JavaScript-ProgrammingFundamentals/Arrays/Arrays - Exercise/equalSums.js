function equalSums(arr) {
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0

        for (let x = i-1; x >= 0; x--) {
            sumLeft += arr[x];
        }

        for (let y = i + 1; y < arr.length; y++) {
            sumRight += arr[y];
        }

        if (sumLeft == sumRight) {
            console.log(i);
            flag = true;
        }
    }

    if (flag == false) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]); 
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);