function wordOccurrences(input) {
    let wordCounter = {};

    for (let entry of input) {
        if (!wordCounter[entry]) {
            wordCounter[entry] = 0;
        }
        wordCounter[entry] = wordCounter[entry] + 1;
    }

    let sortedWordCounter = Object.entries(wordCounter);
    sortedWordCounter.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (let entry of sortedWordCounter) {
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
/*
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
*/