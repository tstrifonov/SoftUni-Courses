function convertToJSON(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let stringedPerson = JSON.stringify(person);

    console.log(stringedPerson);
}

convertToJSON('George', 'Jones', 'Brown');
//{"name":"George","lastName":"Jones","hairColor":"Brown"}
convertToJSON('Peter', 'Smith', 'Blond');
//{"name":"Peter","lastName":"Smith","hairColor":"Blond"}