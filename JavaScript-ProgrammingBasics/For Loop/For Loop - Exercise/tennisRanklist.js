function tennisRanklist(input) {
    let tournamentsNumber = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finishPosition = 0;
    let pointsEarned = 0;
    let pointsTotal = 0;
    let tournamentsWon = 0;
    let pointAverage = 0;
    let percentTournamentsWon = 0;

    for (let i = 1; i <= tournamentsNumber; i++) {
        finishPosition = String(input[i+1]);

        switch (finishPosition) {
            case "W": 
            pointsEarned = pointsEarned + 2000;
            tournamentsWon = tournamentsWon + 1;
            break;
            case "F": pointsEarned = pointsEarned + 1200; break;
            case "SF": pointsEarned = pointsEarned + 720; break;
        }

    }

    pointsTotal = startingPoints + pointsEarned;
    pointAverage = pointsEarned / tournamentsNumber;
    percentTournamentsWon = tournamentsWon / tournamentsNumber * 100;

    console.log(`Final points: ${pointsTotal}`);
    console.log(`Average points: ${Math.floor(pointAverage)}`);
    console.log(`${percentTournamentsWon.toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);

/*


Също изчислете колко точки средно печели от всички изиграни турнири и колко процента от турнирите е спечелил. 
Вход
От конзолата първо се четат два реда:
⦁	Брой турнири, в които е участвал – цяло число в интервала [1…20] 
⦁	Начален брой точки в ранглистата - цяло число в интервала [1...4000]

За всеки турнир се прочита отделен ред:
⦁	Достигнат етап от турнира – текст – "W", "F" или "SF"

Изход
Отпечатват се три реда в следния формат:
⦁	"Final points: {брой точки след изиграните турнири}"
⦁	"Average points: {средно колко точки печели за турнир}"
⦁	"{процент спечелени турнири}%"
Средните точки да бъдат закръглени към най-близкото цяло число надолу, а процентът да се форматира до втората цифра след десетичния знак.

*/