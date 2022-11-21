function race(input) {
    let racers = input.shift().split(", ");
    let racersObj = {};
    for (let racer of racers) {
        racersObj[racer] = 0;
    }
    let command = input.shift();
    let upperCaseFilter = /(?<upperCase>[A-Z])/g;
    let lowerCaseFilter = /(?<lowerCase>[a-z]+)/g;
    let numbersFilter = /(?<numbers>[0-9])/g;

    while (command !== "end of race") {
        let currentName = "";
        let upperLetters = command.match(upperCaseFilter).join("");
        let lowerLetters = command.match(lowerCaseFilter).join("");
        let numbersLetters = command.match(numbersFilter);
        let kilometers = 0;
        currentName = upperLetters + lowerLetters;

        for (let number of numbersLetters) {
            kilometers += Number(number);
        }

        if (racersObj.hasOwnProperty(currentName)) {
            racersObj[currentName] += kilometers;
        }
        
        command = input.shift();
    }

    let orderedRacers = Object.entries(racersObj);
    orderedRacers.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${orderedRacers[0][0]}`);
    console.log(`2nd place: ${orderedRacers[1][0]}`);
    console.log(`3rd place: ${orderedRacers[2][0]}`);
}

/*
 In between them, you could have some 
extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e". 
The letters are the name of the person and the sum of the digits is the distance he ran. 
So here we have George who ran 29 km. Store the information about the person only if the list of 
racers contains the name of the person. If you receive the same person more than once just add the
distance to his old distance. At the end print the top 3 racers ordered by distance in 
descending in the format:
"1st place: {first racer}
2nd place: {second racer}
3rd place: {third racer}"
*/

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'] 
);
/*
1st place: George
2nd place: Peter
3rd place: Tom
*/