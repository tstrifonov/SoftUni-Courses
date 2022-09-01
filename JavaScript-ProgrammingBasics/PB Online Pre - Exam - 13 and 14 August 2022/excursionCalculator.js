function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];
    let tripPrice = 0;

    if (people <= 5) {
        
        switch (season) {
            case "spring": tripPrice = people * 50.00; break;
            case "summer": tripPrice = people * 48.50 * 0.85; break;
            case "autumn": tripPrice = people * 60.00; break;
            case "winter": tripPrice = people * 86.00 * 1.08; break;
        }

    } else if (people > 5) {

        switch (season) {
            case "spring": tripPrice = people * 48.00; break;
            case "summer": tripPrice = people * 45.00 * 0.85; break;
            case "autumn": tripPrice = people * 49.50; break;
            case "winter": tripPrice = people * 85.00 * 1.08; break;
        }

    }

    console.log(`${tripPrice.toFixed(2)} leva.`)
}

excursionCalculator(["10", "summer"]);