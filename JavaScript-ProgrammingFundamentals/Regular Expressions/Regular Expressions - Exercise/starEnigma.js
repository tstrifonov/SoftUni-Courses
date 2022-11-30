function starEnigma(input) {
    let numberOfMesseges = Number(input.shift());
    let starFilter = /[star]/gi;
    let decrypFilter = /\@(?<planetName>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attackType>[A|D])![^@:!\->]*->(?<soldierCount>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < numberOfMesseges; i++) {
        let encryptedMessage = input[i];
        let key = encryptedMessage.match(starFilter).length;
        let decryptedMessage = "";

            for (let u = 0; u < encryptedMessage.length; u++) {
                decryptedMessage += String.fromCharCode(encryptedMessage[u].charCodeAt(0) - key);
            } 

            if (decrypFilter.test(decryptedMessage)) {
                let result = decrypFilter.exec(decryptedMessage);
                let planetName = result.groups['planetName'];
                //let population = Number(result.groups['population']);
                let attackType = result.groups['attackType'];
                //let soldierCount = Number(result.groups['soldierCount']);
        
                if (attackType == "A") {
                    attackedPlanets.push(planetName);
                } else if (attackType == "D") {
                    destroyedPlanets.push(planetName);
                }
            }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}

starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
/*
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Cantonica
*/

starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);
/*
Attacked planets: 0
Destroyed planets: 2
-> Cantonica
-> Coruscant
*/