function jansNotation(input) {
    let numbers = [];
    let commands = [];
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] == "number") {
            numbers.push(input[i]);
        } else {
            commands.push(input[i]);
            let numTwo = numbers.pop();
            let numOne = numbers.pop();
            
            result = 0;
    
            if (typeof numTwo == "number" && typeof numOne == "undefined") {
                result = numTwo;
            } else {
                switch(input[i]) {
                    case "+": result = addtion(numOne, numTwo); commands.pop(); break;
                    case "-": result = substraction(numOne, numTwo); commands.pop(); break;
                    case "/": result = division(numOne, numTwo); commands.pop(); break;
                    case "*": result = multiplication(numOne, numTwo); commands.pop(); break;
                }
            }

            numbers.push(result);
        }
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
    } else if (commands.length > 0) {
        console.log("Error: not enough operands!");
    } else {
        console.log(result);
    }

    function addtion(numOne, numTwo) {
        return numOne + numTwo;
    }

    function substraction(numOne, numTwo) {
        return numOne - numTwo;
    }

    function division(numOne, numTwo) {
        return numOne / numTwo;
    }

    function multiplication(numOne, numTwo) {
        return numOne * numTwo;
    }
}

jansNotation([3, 4, '+']); //7
jansNotation([5, 3, 4, '*', '-']); //-7
jansNotation([7, 33, 8, '-']); //Error: too many operands!
jansNotation([15, '/']); //Error: not enough operands!