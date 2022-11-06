function storage(input) {
    let storageMap = new Map();

    for (let entry of input) {
        let [product, quantity] = entry.split(" ");
        quantity = Number(quantity);
        
        if (storageMap.has(product)) {
            quantity += Number(storageMap.get(product));
        }
    
        storageMap.set(product, quantity);
    }

    for (let key of storageMap.keys()) {
        console.log(`${key} -> ${storageMap.get(key)}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
/*
tomatoes -> 10
coffee -> 45
olives -> 100
*/