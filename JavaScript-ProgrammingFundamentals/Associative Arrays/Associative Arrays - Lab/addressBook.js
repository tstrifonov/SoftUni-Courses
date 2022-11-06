function createAddressBook(input) {
    let adressBook = {};

    for (let entry of input) {
        let [name, adress] = entry.split(":");
        adressBook[name] = adress;
    }

    let addressBookArray = Object.entries(adressBook);

    addressBookArray.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let kvp of addressBookArray) {
        let [name, adress] = kvp;
        console.log(`${name} -> ${adress}`);
    }
}

createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
/*
Bill -> Gateway Way
Bob -> Redwing Ave
George -> Mesta Crossing
Jeff -> Huxley Rd
John -> Grover Rd
Peter -> Huxley Rd
Ted -> Gateway Way
*/