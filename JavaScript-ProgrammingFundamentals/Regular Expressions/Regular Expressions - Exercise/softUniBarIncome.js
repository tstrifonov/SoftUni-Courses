function softUniBarIncome(input) {
    let command = input.shift();
    let filter = /\%(?<customer>[A-Z][a-z]+)\%[^|&%.]*\<(?<product>\w+)\>[^|&%.]*\|(?<count>\d+)\|[^|&%.\d]*(?<price>\d+\.*\d*)\$/;
    let income = 0;

    while (command != "end of shift") {
        let result = filter.exec(command);
        
        if (result !== null) {
            let customer = result.groups['customer'];
            let product = result.groups['product'];
            let count = Number(result.groups['count']);
            let price = Number(result.groups['price']);
            let totalPrice = count * price;
    
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            income += totalPrice;
        }

        command = input.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Peter%<Gum>|1|1.3$',
'%Peter%<Gum>|1|1.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
/*
George: Croissant - 20.60
Peter: Gum - 1.30
Peter: Gum - 1.30
Peter: Gum - 1.30
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 28.20
*/

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);
/*
Valid: Valid - 200.00
Total income: 200.00
*/