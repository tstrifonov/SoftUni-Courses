function printDNA(num) {
    let dnaLetters = "ATCGTTAGGG";
    let counter = 0;

        for (let u = 1; u <= num; u++) {
            let dnaRow = "";
            if ((u - 1) % 4 == 0) {
                dnaRow += "*";
                dnaRow += "*";
                dnaRow += dnaLetters[counter];
                counter++;
                dnaRow += dnaLetters[counter];
                counter++;
                dnaRow += "*";
                dnaRow += "*";
            } else if (u % 2 == 0) {
                dnaRow += "*";
                dnaRow += dnaLetters[counter];
                counter++;
                dnaRow += "-";
                dnaRow += "-";
                dnaRow += dnaLetters[counter];
                counter++;
                dnaRow += "*";
            } else {
                dnaRow += dnaLetters[counter];
                counter++;
                dnaRow += "-";
                dnaRow += "-";
                dnaRow += "-";
                dnaRow += "-";
                dnaRow += dnaLetters[counter];
                counter++;
            }

            if (counter == 10) {
                counter = 0;
            }

            console.log(dnaRow);
        }
}

printDNA(4);
/*
**AT**
*C--G*
T----T
*A--G*
*/

console.log("--------");

printDNA(10);
/*
**AT**
*C--G*
T----T
*A--G*
**GG**
*A--T*
C----G
*T--T*
**AG**
*G--G*
*/
