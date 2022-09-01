function oscarsWeekInCinema(input) {
    let movie = input[0];
    let hall = input[1];
    let ticketsSold = Number(input[2]);
    let income = 0;

    switch (movie) {
        case "A Star Is Born":
            switch (hall) {
                case "normal": income = ticketsSold * 7.50; break;
                case "luxury": income = ticketsSold * 10.50; break;
                case "ultra luxury": income = ticketsSold * 13.50; break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (hall) {
                case "normal": income = ticketsSold * 7.35; break;
                case "luxury": income = ticketsSold * 9.45; break;
                case "ultra luxury": income = ticketsSold * 12.75; break;
            }
            break;
        case "Green Book":
            switch (hall) {
                case "normal": income = ticketsSold * 8.15; break;
                case "luxury": income = ticketsSold * 10.25; break;
                case "ultra luxury": income = ticketsSold * 13.25; break;
            }
            break;
        case "The Favourite":
            switch (hall) {
                case "normal": income = ticketsSold * 8.75; break;
                case "luxury": income = ticketsSold * 11.55; break;
                case "ultra luxury": income = ticketsSold * 13.95; break;
            }
            break;
    }

    console.log(`${movie} -> ${income.toFixed(2)} lv.`);

}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);