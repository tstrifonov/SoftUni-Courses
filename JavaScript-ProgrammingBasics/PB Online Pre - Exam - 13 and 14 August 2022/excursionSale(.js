function excursionSale(input) {
    let index = 0;
    let seaTrip = Number(input[index]);
    index++;
    let mountainTrip = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let profit = 0;

    while (command !== "Stop") {
       
        if (command === "sea" && seaTrip > 0) {
            seaTrip--;
            profit = profit + 680;
        } else if (command === "mountain"  && mountainTrip > 0) {
            mountainTrip--;
            profit = profit + 499;
        }

        if (seaTrip <= 0 && mountainTrip <= 0) {
            console.log(`Good job! Everything is sold.`);
            break;
        }

        command = input[index];
        index++;

    }

    console.log(`Profit: ${profit} leva.`);

}

excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);