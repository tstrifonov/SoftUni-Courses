function storeProvision(currentStock, delivery) {
    let finalStore = [];

    for (let i = 0; i < currentStock.length; i++) {
        let productName = currentStock[i];
        i++;
        let productQuantity = Number(currentStock[i]);

        let product = {productName: productName, productQuantity: productQuantity};
        finalStore.push(product);
    }

    for (let i = 0; i < delivery.length; i++) {
        let productName = delivery[i];
        i++;
        let productQuantity = Number(delivery[i]);
        let flag = false;
        for (let u = 0; u < finalStore.length; u++) {
            if (finalStore[u].productName == productName) {
                flag = true;
                finalStore[u].productQuantity += productQuantity;
            }
        }

        if (flag == false) {
                let product = {productName: productName, productQuantity: productQuantity};
                finalStore.push(product);
        }
    }

    for (let product of finalStore) {
        console.log(`${product.productName} -> ${product.productQuantity}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
/*
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70
*/

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);
/*
Salt -> 2
Fanta -> 4
Apple -> 21
Water -> 4
Juice -> 5
Sugar -> 44
Oil -> 12
Tomatoes -> 7
Bananas -> 30
*/