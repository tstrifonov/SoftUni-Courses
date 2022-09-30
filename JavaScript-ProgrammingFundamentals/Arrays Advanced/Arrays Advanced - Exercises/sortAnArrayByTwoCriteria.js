function sortAnArrayByTwoCriteria(arr) {
    arr.sort(function(a, b) {
        return a.length - b.length;
    });

    arr.sort(function(a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
    });

    console.log(arr.join("\n"));
}

sortAnArrayByTwoCriteria(['Bba', 'cdd', 'Ada']); 
/*
beta
alpha
gamma
*/
//sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
/*
Jack
Isacc
George
Theodor
Harrison
*/

/*
Write a function that orders an array of strings, by their length in ascending order as primary criteria, 
and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings, each on a separate line.
*/