function skiTrip(input) {
    let days = Number(input[0]) - 1;
    let roomType = input[1];
    let review = input[2];
    let pricePerDay = 0;
    let finalSum = 0;

    if (days < 10) {
        switch (roomType) {
            case "room for one person": pricePerDay = 18.00; break;
            case "apartment": pricePerDay = 25.00 * 0.70; break;
            case "president apartment": pricePerDay = 35.00 * 0.90; break;
        }

    } else if (days >= 10 && days <= 15) {
        switch (roomType) {
            case "room for one person": pricePerDay = 18.00; break;
            case "apartment": pricePerDay = 25.00 * 0.65; break;
            case "president apartment": pricePerDay = 35.00 * 0.85; break;
        }

    } else if(days > 15) {
        switch (roomType) {
            case "room for one person": pricePerDay = 18.00; break;
            case "apartment": pricePerDay = 25.00 * 0.50; break;
            case "president apartment": pricePerDay = 35.00 * 0.80; break;
        }

    }

    if (review === "positive") {
        pricePerDay = 1.25 * pricePerDay;

    } else if (review === "negative") {
        pricePerDay = 0.90 * pricePerDay;

    }

    finalSum = days * pricePerDay;

    console.log(finalSum.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
