function carWash(commands) {
    let cleanness = 0;

    for (let i = 0 ; i < commands.length; i++) {
        switch (commands[i]) {
            case "soap": cleanness += 10; break;
            case "water": cleanness *= 1.2; break;
            case "vacuum cleaner": cleanness *= 1.25; break;
            case "mud": cleanness *= 0.9; break;
        }
    }

    console.log(`The car is ${cleanness.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); //The car is 39.00% clean.
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]); //The car is 13.12% clean.

/*
Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. 
Start from 0. The first command will always be 'soap':
⦁	soap – add 10 to the value
⦁	water – increase the value by 20%
⦁	vacuum cleaner – increase the value by 25%
⦁	mud – decrease the value by 10%
The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
             `The car is {value}% clean.`
  Note: The value should be rounded to the second decimal point.
*/