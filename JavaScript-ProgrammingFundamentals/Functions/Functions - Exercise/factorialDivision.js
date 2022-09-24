function factorialDivision(numOne, numTwo) {
    let factorialNumOne = factorial(numOne);
    let factorialNumTwo = factorial(numTwo);
    
    console.log((factorialNumOne / factorialNumTwo).toFixed(2));
    
    function factorial (num) {
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }
        return result;
    }
}

factorialDivision(6, 2);