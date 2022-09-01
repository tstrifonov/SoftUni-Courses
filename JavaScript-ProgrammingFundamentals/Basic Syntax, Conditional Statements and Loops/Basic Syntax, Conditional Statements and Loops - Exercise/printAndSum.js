function printAndSum(a, b) {
    let sum = 0;
    let numbers = "";

    for (let i = a; i <= b; i++) {
        numbers += `${i} `;
        sum += i;
    }
    
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);

/*
Write a function that displays numbers from given start to given end and their sum. 
The input comes as two number parameters. Print the result like the examples below:
*/