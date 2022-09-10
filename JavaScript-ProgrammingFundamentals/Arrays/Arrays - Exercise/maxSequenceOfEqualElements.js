function maxSequenceOfEqualElements(arr) {
    let longestArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currArr = [];
        currArr.push(arr[i]);

        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] == arr[y]) {
                currArr.push(arr[y]);
            } else {
                break;
            }
        }

        if (longestArr.length < currArr.length) {
                longestArr = currArr;
        }
    }

    console.log(longestArr.join(" "));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); //2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]); //1 1 1 
maxSequenceOfEqualElements([4, 4, 4, 4]); //4 4 4 4 

/*Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.*/