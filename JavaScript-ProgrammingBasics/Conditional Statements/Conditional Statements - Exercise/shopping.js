function shopping(input) {
    let peterBudjet = Number(input[0]);
    let videoCardWanted = Number(input[1]);
    let processorsWanted = Number(input[2]);
    let ramWanted = Number(input[3]);

    let videoCardPrice = Number(250);
    let processorsPrice = Number(0.35 * videoCardPrice * videoCardWanted);
    let ramPrice = Number(0.10 * videoCardPrice * videoCardWanted);

    let finalCost = Number((videoCardPrice * videoCardWanted) + (processorsPrice * processorsWanted) + (ramPrice * ramWanted));
    let differenceBetweenBudjetAndFinalCost = 0;

    if (videoCardWanted > processorsWanted) {
        finalCost = (0.85 * finalCost);
    }

    if (finalCost <= peterBudjet) {
        differenceBetweenBudjetAndFinalCost = Number(peterBudjet - finalCost);
        console.log(`You have ${differenceBetweenBudjetAndFinalCost.toFixed(2)} leva left!`);
    } else {
        differenceBetweenBudjetAndFinalCost = Number(finalCost - peterBudjet);
        console.log(`Not enough money! You need ${differenceBetweenBudjetAndFinalCost.toFixed(2)} leva more!`);
    }

}

shopping(["900", "2", "1", "3"]);
