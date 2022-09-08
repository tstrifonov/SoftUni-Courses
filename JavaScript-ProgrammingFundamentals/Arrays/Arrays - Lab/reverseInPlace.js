function reverseInPlace(arr) {
    
    for (let i = 0; i < (arr.length / 2); i++) {
        let n = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = n;
    }

    console.log(arr.join(" "));
}

reverseInPlace(['33', '123', '0', 'dd']);
