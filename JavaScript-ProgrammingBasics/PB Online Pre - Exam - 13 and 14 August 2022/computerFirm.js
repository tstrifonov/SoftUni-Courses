function computerFirm(input) {
    let n = Number(input[0]);
    let totalSaledMade = 0;
    let averageRating = 0;

    for (let i = 1; i <= n; i++) {
        
        let computerCode = Number(input[i]);
        let rating = computerCode % 10;
        let salesPossible = Math.floor(computerCode / 10);
        let salesMade = 0;

        switch (rating) {
            case 2 : salesMade = salesPossible * 0.00; break;
            case 3 : salesMade = salesPossible * 0.50 ; break;
            case 4 : salesMade = salesPossible * 0.70; break;
            case 5 : salesMade = salesPossible * 0.85; break;
            case 6 : salesMade = salesPossible * 1.00; break;
        }

        totalSaledMade = totalSaledMade + salesMade;
        averageRating = averageRating + rating
    }

    averageRating = averageRating / n;

    console.log(totalSaledMade.toFixed(2));
    console.log(averageRating.toFixed(2));

}

computerFirm(["5", "122", "156", "202", "214", "185"]);