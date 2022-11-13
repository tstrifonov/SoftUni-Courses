function substring (word, startIndex, count) {
    let result = word.substring(startIndex, count + startIndex);
    console.log(result);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);