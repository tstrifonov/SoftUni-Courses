function processOddNumbers(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            newArr.unshift(arr[i] * 2);
        }
    }

    console.log(newArr.join(" "));
}

processOddNumbers([10, 15, 20, 25]); //50 30
processOddNumbers([3, 0, 10, 4, 7, 3]); //6 8 0

/*
You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.
*/