function lastKNumbersSequance(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let previousK = arr.slice(-k);
        let sum = 0;

        for (let u = 0; u < previousK.length; u++) {
            sum += previousK[u];
        }

        arr.push(sum);
    }

    console.log(arr.join(" "));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);

/*
You are given two integers n and k. Write a function that generates and prints the following sequence:
⦁	The first element is 1.
⦁	Every following element equals the sum of the previous k elements.
⦁	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.
*/