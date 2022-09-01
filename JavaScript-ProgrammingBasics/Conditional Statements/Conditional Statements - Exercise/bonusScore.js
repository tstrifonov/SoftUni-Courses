function bonusScore(input) {
    let a = Number(input[0]);
    let lastDigitOfA = (input[0]).slice(-1);
    let bonusPoints = 0;
    let endSum = 0;

    if (a <= 100) {
        bonusPoints = 5;
    } else if (a <= 1000) {
        bonusPoints = 0.2 * a;
    } else {
        bonusPoints = 0.1 * a;
    }
    
    if ((a % 2) === 0) {
        bonusPoints = bonusPoints + 1;
    } else if (lastDigitOfA == 5) {
        bonusPoints = bonusPoints + 2;
    }

    endSum = a + bonusPoints;

   console.log(bonusPoints);
   console.log(endSum);
}

bonusScore(["175"]);