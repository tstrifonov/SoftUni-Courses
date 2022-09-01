function triangleOfNumbers(n) {
    let triangleSide = "";
    for (let i = 1; i<= n; i++) {
        let triangleSide = "";
            for (let u = 1; u <= i; u++) {
              triangleSide += `${i} `;
            }
        console.log(triangleSide);
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(7);

/*
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
*/