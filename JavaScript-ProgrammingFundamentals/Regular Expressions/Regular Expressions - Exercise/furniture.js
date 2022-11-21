function furniture(input) {
    let filter = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+[\.]*\d*)\!(?<quantity>\d+)/;
    let command = input.shift();
    let furniture = [];
    let totalCost = 0;

    while (command != 'Purchase') {
        let result = filter.exec(command);

        if (result !== null) {
            
            let name = result.groups['name'];
            let price = Number(result.groups['price']) * Number(result.groups['quantity']);
            let purchase = [];
            purchase.push(name);
            purchase.push(price);
            furniture.push(purchase);
        }

        command = input.shift();
    }

    console.log("Bought furniture:");

    for (let item of furniture) {
        console.log(item[0]);
        totalCost += item[1];
    }

    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
/*
Bought furniture:
Laptop
TV
TV
TV
Total money spend: 8593.09
*/

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
/*
Bought furniture:
Sofa
TV
Total money spend: 2436.69
*/