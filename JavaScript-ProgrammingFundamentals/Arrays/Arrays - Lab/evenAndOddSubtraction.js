function evenAndOddSubtraction(arr) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            even += Number(arr[i]);
        } else {
            odd += Number(arr[i]);
        }
    }

    console.log(even - odd);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);