function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];
    
    for (let i = n - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(" "));

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
