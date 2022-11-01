function makeDictionary(input) {
    let dictionary = {};

    input.forEach(element => {
        let newWord = JSON.parse(element);
        let newKey = Object.keys(newWord)[0];
        let newValue = Object.values(newWord)[0];
        dictionary[newKey] = newValue;
    });

    let arrangedKeys = Object.keys(dictionary).sort();
 
    for (let key of arrangedKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}

/*
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. 
If you receive the same term twice, replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
`Term: ${term} => Definition: ${definition}`
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
*/

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Tape":"Test."}'
    ]);
/*
Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.
*/

console.log("------------------------------");

makeDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]);
/*
Term: Art => Definition: The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.
Term: Cake => Definition: An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated.
Term: Cup => Definition: A small bowl-shaped container for drinking from, typically having a handle
Term: Music => Definition: Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.
Term: Watermelon => Definition: The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice.
*/