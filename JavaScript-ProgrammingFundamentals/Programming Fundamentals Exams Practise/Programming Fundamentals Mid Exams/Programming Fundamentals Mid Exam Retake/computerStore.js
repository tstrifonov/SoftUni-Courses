function computerStore(input) {
    let totalPrice = 0;
    let taxes = 0;
    let endPrice = 0;
    let command = input.shift();

    while (command != "special" && command != "regular") {
        if (Number(command) < 0) {
            console.log("Invalid price!" );
        } else {
        totalPrice += Number(command);
        }
        command = input.shift();
    }

    taxes = 0.2 * totalPrice;

    if (command == "regular") {
        endPrice = totalPrice + taxes;
    } else if (command = "special") {
        endPrice = (totalPrice + taxes ) * 0.9;
    }

    if (endPrice == 0) {
        console.log("Invalid order!" )
    } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${endPrice.toFixed(2)}$`);
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
/*
Congratulations you've just bought a new computer!
Price without taxes: 1737.36$
Taxes: 347.47$
-----------
Total price: 1876.35$
*/
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
/*
Invalid price!
Invalid price!
Congratulations you've just bought a new computer!
Price without taxes: 1544.96$
Taxes: 308.99$
-----------
Total price: 1853.95$
*/
computerStore(['regular']);
/*
Invalid order!
*/