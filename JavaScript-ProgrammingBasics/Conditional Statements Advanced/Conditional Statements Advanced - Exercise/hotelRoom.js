function hotelRoom(input) {
    let month = input[0];
    let daysSpend = Number(input[1]);
    let apartmentPerDay = 0;
    let studioPerDay = 0;
    let apartmentSpent = 0;
    let studioSpent = 0;

    if (month === "May" || month === "October") {
        apartmentPerDay = 65;
        studioPerDay = 50;

    } else if (month === "June" || month === "September") {
        apartmentPerDay = 68.70;
        studioPerDay = 75.20;
        
    } else if (month === "July" || month === "August") {
        apartmentPerDay = 77;
        studioPerDay = 76;
        
    }

    if ((month === "May" || month === "October") && (daysSpend > 7 && daysSpend <= 14)) {
        studioPerDay = 0.95 * studioPerDay;

    } else if ((month === "May" || month === "October") && daysSpend > 14) {
        studioPerDay = 0.70 * studioPerDay;

    } else if ((month === "June" || month === "September") && daysSpend > 14) {
        studioPerDay = 0.80 * studioPerDay;

    }
    
    if (daysSpend > 14) {
        apartmentPerDay = 0.90 * apartmentPerDay;
    }

        apartmentSpent = apartmentPerDay * daysSpend;
        studioSpent = studioPerDay * daysSpend;

    console.log(`Apartment: ${apartmentSpent.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSpent.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);