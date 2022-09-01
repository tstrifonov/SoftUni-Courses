function operationBetweenNumbers(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = 0;


    if ((operator === "/" || operator === "%") && number2 === 0) {
        console.log(`Cannot divide ${number1} by zero`);

    } else {

        if (operator === "+" || operator === "-" || operator === "*") {
           
            switch (operator) {
                case "+": result = number1 + number2; break;
                case "-": result = number1 - number2; break;
                case "*": result = number1 * number2; break;
            }

            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }

            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);

        } else if (operator === "/") {

            result = number1 / number2;

            console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);

        } else if (operator === "%") {

            result = number1 % number2;

            console.log(`${number1} % ${number2} = ${result}`)
        }

    }

}

operationBetweenNumbers(["55", "5", "*"]);