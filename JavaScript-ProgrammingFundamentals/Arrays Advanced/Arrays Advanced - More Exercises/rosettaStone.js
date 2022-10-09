function rosettaStone(input) {
    let n = Number(input.shift());
    let template = [];
    let message = [];
    let result = "";

    //създавам шифъра
    for (let i = 0; i < n; i++) {
        let row = input.shift().split(" ");
        template.push([]);
        for (let u = 0; u < row.length; u++) {
            let cell = row[u]
            template[i].push(cell);
        }
    }

    let tempRows = template.length;
    let tempColumns = template[0].length;

    //създавам съобщението
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(" ");
        message.push([]);
        for (let u = 0; u < row.length; u++) {
            let cell = row[u]
            message[i].push(cell);
        }
    }

    for (let i = 0; i < message.length; i += tempRows) {
        for (let u = 0; u < message[i].length; u += tempColumns) {
            for (let x = 0; x < template.length; x++) {
                for (let z = 0; z < template[x].length; z++) {
                   
                    if (!(i + x >= message.length || u + z >= message.length)) {
                        let letter = findLetter(Number(template[x][z]) + Number(message[i + x][u + z]));
                        message[i + x][u + z] = letter;
                    }
                }
            }
            
        }
    }

    for (let i = 0; i < message.length; i++) {
        for (let u = 0; u < message.length; u++) {
            let letter = message[i][u];
            result += letter;
        }
    }

    console.log(result);

    function findLetter(number) {
        let wheelOfLetters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return wheelOfLetters[number % 27];
    } 
}

/*
rosettaStone(
['2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22']);
I CAME I SAW I CONQUERED
*/

/*
rosettaStone(
['2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22']);
WE COME IN PEACE
*/

rosettaStone(
    [`1`,
    `1 3 13`,
    `12 22 14 13 25 0 4 24 23`,
    `18 24 2 25 22 0 0 11 18`,
    `8 25 6 26 8 23 13 4 14`,
    `14 3 14 10 6 1 6 16 14`,
    `11 12 2 10 24 2 13 24 0`,
    `24 24 10 14 15 25 18 24 12`,
    `4 24 0 8 4 22 19 22 14`,
    `0 11 18 26 1 19 18 13 15`,
    `8 15 14 26 24 14 26 24 14`]);