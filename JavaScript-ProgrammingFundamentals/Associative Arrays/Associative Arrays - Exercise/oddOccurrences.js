function oddOccurrences(input) {
    let resultObject = {};

    let caseInsensitiveArray = input
        .split(" ")
        .map(word => word.toLowerCase());

   for (let word of caseInsensitiveArray) {
        if (!resultObject[word]) {
            resultObject[word] = 0;
        }
        resultObject[word]++;
   }
   
   let resultArray = Object.entries(resultObject);
   resultArray.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

   let result = [];

   for (let word of resultArray) {
        if (word[1] % 2 != 0) {
            result.push(word[0]);
        }
   }

   console.log(result.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
/*
c# php 1 5
*/

/*
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.
*/