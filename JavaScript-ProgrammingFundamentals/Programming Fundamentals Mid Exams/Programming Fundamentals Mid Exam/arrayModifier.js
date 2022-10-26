function arrayModifier(input) {
    let elements = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")[0];

        switch (command) {
            case "swap": 
                let number = elements[input[i].split(" ")[1]];
                elements[input[i].split(" ")[1]] = elements[input[i].split(" ")[2]];
                elements[input[i].split(" ")[2]] = number;

            break;

            case "multiply":
                elements[input[i].split(" ")[1]] = Number(elements[input[i].split(" ")[1]]) * Number(elements[input[i].split(" ")[2]]);
            break;

            case "decrease": 
                for (let u = 0; u < elements.length; u++) {
                    elements[u] = Number(elements[u]) - 1;
                }
            break;
        }
    }

    console.log(elements.join(", "));
}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
  /*
  86, 7382, 2369942, -124, 41, 89, -3
  */

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]);
/*
1, 11, 3, 0
*/