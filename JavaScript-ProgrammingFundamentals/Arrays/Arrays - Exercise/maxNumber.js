function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let flag = true;

        for (let y = i+1; y < arr.length; y++) {
            if (arr[i] <= arr[y]) {
                flag = false;
            }
        }

        if (flag == true) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(" "));
}

//maxNumber([1, 4, 3, 2]); //4 3 2
//maxNumber([14, 24, 3, 19, 15, 17]); //24 19 17
maxNumber([41, 41, 34, 20]); //41 34 20
//maxNumber([27, 19, 42, 2, 13, 45, 48]); //48