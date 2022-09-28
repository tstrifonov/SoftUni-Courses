function negativeOrPositiveNumbers(arr) {
    let newArr = [];

    for (let element of arr) {
     let num = Number(element);
        if (num >= 0) {
            newArr.push(num);
        } else {
            newArr.unshift(num);
        }
    }

    console.log(newArr.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);