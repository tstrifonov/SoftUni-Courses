function sumOfOddNumbers(n) {
    let totalSum = 0;
    let counter = 0;
    let i = 1;

    while (counter < n) {
        if (i % 2 != 0) {
            totalSum += i;
            counter++;
            console.log(i);
        }
        i++;
    }

    console.log(`Sum: ${totalSum}`);
}

sumOfOddNumbers(5);

/*Write a program that prints the next n odd numbers 
(starting from 1) and on the last row prints the sum of them.

Input
You will receive a number – n. 
This number shows how many odd numbers you should print.

Output
Print the next n odd numbers, starting from 1, separated by newlines.
On the last line, print the sum of these numbers in the following format:
 `Sum: {total sum}`
Constraints
⦁	n will be in the interval [1…100]
*/