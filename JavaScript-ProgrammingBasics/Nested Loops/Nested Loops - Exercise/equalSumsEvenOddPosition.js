function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);

    
    let allNumbers = "";

    for (let i = startNumber; i <= endNumber; i++) {
        let currentNumber = "" + i;
        let even = 0;
        let odd = 0;

        for (y = 0; y <= currentNumber.length; y++) {
            let specificDigit = Number(currentNumber.charAt(y));
            if (y % 2 === 0) {
                even = even + specificDigit;
            } else {
                odd = odd + specificDigit;
            }
        }

        if (even == odd) {
            allNumbers = allNumbers + ` ${i}`;
        }

    }

    console.log(allNumbers);
         
}

equalSumsEvenOddPosition(["100000", "100050"]);