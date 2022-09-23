function simpleCalculator(x, y, operator) {
    let result = 0;

    switch (operator) {
        case "add": result = x + y; break;
        case "subtract": result = x - y; break;
        case "multiply": result = x * y; break;
        case "divide": result = x / y; break;
    }

    console.log(result);
}

simpleCalculator(12, 19, 'add');