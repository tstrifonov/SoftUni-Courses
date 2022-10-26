function shootForTheWin(input) {
    let targets = input.shift().split(" ");
    let targetCount = targets.length
    let shot = input.shift();
    let count = 0;

    while (shot != "End") {
        if (Number(targets[shot]) == -1 || Number(shot) < 0 || Number(shot) >= targetCount) {
            shot = input.shift();
            continue;
        }
        
        let targetValue = Number(targets[shot]);
        targets[shot] = -1;
        count++;

        for (let i = 0; i < targetCount; i++) {
            if (i == shot) {
                continue;
            }

            if (targetValue < Number(targets[i]) && Number(targets[i]) != -1) {
                targets[i] = Number(targets[i]) - targetValue;
            } else if (targetValue >= Number(targets[i]) && Number(targets[i]) != -1) {
                targets[i] = Number(targets[i]) + targetValue;
            }
        }

        shot = input.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}

shootForTheWin((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]));
/*
Shot targets 3 -> -1 -1 130 -1
*/

shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]));
/*
Shot targets: 4 -> -1 120 -1 66 -1 -1
*/
