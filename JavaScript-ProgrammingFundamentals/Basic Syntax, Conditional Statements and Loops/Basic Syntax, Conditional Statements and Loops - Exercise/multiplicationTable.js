function multiplicationTable(n){
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

multiplicationTable(5);

/*
You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.
Output
Print every row of the table in the following format:
{number} X {times} = {product}
*/