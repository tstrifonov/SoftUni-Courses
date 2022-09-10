function addAndSubtract(arr) {
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        
       arr[i] % 2 == 0 ? arr[i] += i : arr[i] -= i;

        sumNewArr += arr[i];
    }

    console.log(`[ ${arr.join(", ")} ]`);
    console.log(sumArr);
    console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);