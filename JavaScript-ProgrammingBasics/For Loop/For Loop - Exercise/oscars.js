function oscars(input) {
    let actorName = input[0];
    let pointsGivemByAcademy = Number(input[1]);
    let judgesNumber = Number(input[2]);
    let judgeName = 0;
    let pointsGivenByJudge = 0;
    let totalScore = pointsGivemByAcademy;

    for (let i = 3; i <= ((judgesNumber * 2) + 1); i = i + 2) {
    judgeName = String(input[i]);
    totalScore = totalScore + (judgeName.length * String(input[i+1]) / 2);

        if (totalScore > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
            i = ((judgesNumber * 2) + 2)

        } else if (i === ((judgesNumber * 2) + 1)) {
            let pointsNeeded = 1250.5 - totalScore;
            console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);

        }

    }

}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);