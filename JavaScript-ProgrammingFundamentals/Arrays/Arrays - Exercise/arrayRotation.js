function arrayRotation(arr, n) {
    for (let i = 1; i <= n; i++) {
        let x = arr.shift();
        arr[arr.length] = x;
    }

    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);