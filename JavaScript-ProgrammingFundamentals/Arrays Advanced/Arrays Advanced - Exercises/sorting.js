function sorting(arr) {
    arr.sort((a, b) => b - a);
    let newArr = [];

    while (arr.length > 0) {
        newArr.push(arr.shift());
        newArr.push(arr.pop());
    }

    console.log(newArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); //94 1 69 2 63 3 52 18 31 21
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]); //690 2 47 6 45 7 34 19 32 32

/*
Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, 
the third is the second biggest one, and the fourth is the second smallest one, and so on. 
Print the elements on one row, separated by a single space.
*/