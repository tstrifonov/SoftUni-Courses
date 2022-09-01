function journey(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let typeOfJourney = 0;
    let moneySpent = 0;

    switch (season) {
        case "summer": typeOfJourney = "Camp"; break;
        case "winter": typeOfJourney = "Hotel"; break;
    }

    if (budjet <= 100) {
        destination = "Bulgaria";

        switch (season) {
            case "summer": moneySpent = 0.3 * budjet; break;
            case "winter": moneySpent = 0.7 * budjet; break;
        }

    } else if (budjet <= 1000) {
        destination = "Balkans";
        
        switch (season) {
            case "summer": moneySpent = 0.4 * budjet; break;
            case "winter": moneySpent = 0.8 * budjet; break;
        }
        
    } else {
        destination = "Europe";
        typeOfJourney = "Hotel";
        moneySpent = 0.9 * budjet;
        
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfJourney} - ${moneySpent.toFixed(2)}`);
}

journey(["50", "summer"]);
