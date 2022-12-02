function mirrorWordsProblem(input) {
    //find all hidden and extract the hidden word pairs
    let string = input[0];
    let filter = /(?<separator>[#@])(?<wordOne>[A-Za-z]{3,})\k<separator>\k<separator>(?<wordTwo>[A-Za-z]{3,})\k<separator>/g;
    let wordPairs = string.match(filter);
    let matches = [];

    //print result or pairs found
    if (wordPairs == null) {
        console.log("No word pairs found!");
    } else {
        console.log(`${wordPairs.length} word pairs found!`);
    //look for mirror words
        for (let pair of wordPairs) {
            if (pair.length % 2 === 0) {
                let wordOne = pair.slice(0, pair.length / 2);
                let wordTwo = pair.slice(pair.length / 2);
                let wordTwoReversed = wordTwo.split("").reverse().join("");
                if (wordOne == wordTwoReversed) {
                    matches.push(`${wordOne.slice(1, (wordOne.length - 1))} <=> ${wordTwo.slice(1, (wordTwo.length - 1))}`);
                }
            }
        }
    }

    //print result or mirror words found
    if (matches.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:`);
        console.log(`${matches.join(", ")}`);
    }
}

mirrorWordsProblem([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    );
/*
5 word pairs found!
The mirror words are:
Part <=> traP, leveL <=> Level, sAw <=> wAs
*/

mirrorWordsProblem([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
);
/*
2 word pairs found!
No mirror words!	
*/

mirrorWordsProblem([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);
/*
No word pairs found!
No mirror words!
*/