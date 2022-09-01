function sortNumbers(a, b, c) {
    let array = [0, 0, 0];

    if (a >= b && a >= c) {
        array[0] = a;
        if (b >= c) {
            array[1] = b;
            array[2] = c;
        } else {
            array[1] = c;
            array[2] = b;
        }
    } else if (b >= a && b >= c) {
        array[0] = b;
        if (a >= c) {
            array[1] = a;
            array[2] = c;
        } else {
            array[1] = c;
            array[2] = a;
        }
    } else if (c >= a && c >= b) {
        array[0] = c;
        if (a >= b) {
            array[1] = a;
            array[2] = b;
        } else {
            array[1] = b;
            array[2] = a;
        }
    }

    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}

sortNumbers(2, 1, 3);

/*
Receive three numbers and you have to sort them in descending order. Print each number on a new line.
*/