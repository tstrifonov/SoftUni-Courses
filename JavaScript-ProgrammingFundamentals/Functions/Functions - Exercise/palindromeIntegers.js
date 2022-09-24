function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let numToSring = (arr[i] + "");
        let flag = true;

        for (let u = 0; u < numToSring.length; u++) {
            if (numToSring[u] != numToSring[numToSring.length - 1 - u]) {
                flag = false;
                break;
            }
        }

        console.log(flag);
    }
}

palindromeIntegers([123,323,421,121]); //false true false true
palindromeIntegers([32,2,232,1010]); //false true true false

/*
A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, 
which receives an array of positive integers and checks if each integer is a palindrome or not.
Output
If the current integer is a palindrome, print: "true"
Otherwise, print: "false"
*/