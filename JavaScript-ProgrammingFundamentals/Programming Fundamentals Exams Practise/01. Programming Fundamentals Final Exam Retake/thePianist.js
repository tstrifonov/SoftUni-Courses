function thePianist(input) {
    let n = Number(input.shift());
    let collection = {};

    for (let i = 0; i < n; i++) {
        let piece = input[i].split("|")[0];
        let composer = input[i].split("|")[1];
        let key = input[i].split("|")[2];

        collection[piece] = {};
        collection[piece].composer = composer;
        collection[piece].key = key;
    }

    for (let i = n; i < input.length; i++) {
        let command = input[i].split("|")[0];
        let piece = input[i].split("|")[1];

        switch (command) {
            case "Add":
            let composer = input[i].split("|")[2];
            let key = input[i].split("|")[3];
                if (collection.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection[piece] = {};
                    collection[piece].composer = composer;
                    collection[piece].key = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
            break;

            case "Remove": 
                if (!collection.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    delete collection[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
            break;

            case "ChangeKey": 
            let newKey = input[i].split("|")[2];
                if (collection.hasOwnProperty(piece)) {
                    collection[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
            break;

            case "Stop": 
                for (let entry in collection) {
                    console.log(`${entry} -> Composer: ${collection[entry].composer}, Key: ${collection[entry].key}`);
                }
            break;
        }
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
/*
Spring by Vivaldi in E Major added to the collection!
Successfully removed The Marriage of Figaro!
Invalid operation! Turkish March does not exist in the collection.
Changed the key of Spring to C Major!
Nocturne by Chopin in C# Minor added to the collection!
Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
La Campanella -> Composer: Liszt, Key: G# Minor
Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
Spring -> Composer: Vivaldi, Key: C Major
Nocturne -> Composer: Chopin, Key: C# Minor
*/

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);
/*
Sonata No.2 by Chopin in B Minor added to the collection!
Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
Fur Elise is already in the collection!
Successfully removed Clair de Lune!
Changed the key of Moonlight Sonata to C# Major!
Fur Elise -> Composer: Beethoven, Key: A Minor
Moonlight Sonata -> Composer: Beethoven, Key: C# Major
Sonata No.2 -> Composer: Chopin, Key: B Minor
Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor
*/