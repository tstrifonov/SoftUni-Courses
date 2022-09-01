function tradeCommisions(input) {
    let town = input[0];
    let sells = Number(input[1]);

    let commision = 0;

    if (sells >= 0 && sells <= 500) {
        switch (town) {
            case "Sofia": commision = sells * 0.05; break;
            case "Varna": commision = sells * 0.045; break;
            case "Plovdiv": commision = sells * 0.055; break;
        }
    } else if (sells > 500 && sells <= 1000) {
        switch (town) {
            case "Sofia": commision = sells * 0.07; break;
            case "Varna": commision = sells * 0.075; break;
            case "Plovdiv": commision = sells * 0.08; break;
        }
    } else if (sells > 1000 && sells <= 10000) {
        switch (town) {
            case "Sofia": commision = sells * 0.08; break;
            case "Varna": commision = sells * 0.10; break;
            case "Plovdiv": commision = sells * 0.12; break;
        }
    } else if (sells > 10000) {
        switch (town) {
            case "Sofia": commision = sells * 0.12; break;
            case "Varna": commision = sells * 0.13; break;
            case "Plovdiv": commision = sells * 0.145; break;
        }
    }

    if (sells > 0 && (town === "Sofia" || town === "Varna" || town === "Plovdiv")) {
        console.log(commision.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommisions(["Sofia", "1500"]);