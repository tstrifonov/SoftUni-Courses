function searchForANumber(firstArr, secondArr) {
    let newArr = firstArr.slice(0, secondArr[0]);
    newArr.splice(0, secondArr[1]);
    let number = secondArr[2];
    let count = 0;

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == number) {
            count++;
        }
    }

    console.log(`Number ${number} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]); // Number 3 occurs 1 times.
/*
First, we take 5 elements from the array. Delete the first 2 elements. 
Then we search for the number 3.
*/
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]); // Number 5 occurs 1 times.

/*
You will receive two arrays of integers. The second array is containing exactly three numbers. 

The first number represents the number of elements you have to take from the first array (starting from the first one).

The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 

The third number is the number we search in our collection after the manipulations. 

As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."
*/