function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]); // Х - цена пералня
    let toyPrice = Number(input[2]); //P - продава
    let sumGifted = 0;
    let moneyGifted = 0;
    let moneyEarnedFromSelling = 0;
    let brothersCash = 0;
    let totalSavings = 0;
    let difference = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 != 0) {
            moneyEarnedFromSelling = moneyEarnedFromSelling + toyPrice;

        } else if (i % 2 === 0) {
            sumGifted = sumGifted + 10;
            moneyGifted = moneyGifted + sumGifted;
            brothersCash = brothersCash + 1;
        }
    }
 
    totalSavings = moneyEarnedFromSelling + moneyGifted - brothersCash;

    if (totalSavings >= washingMachine) {
        difference = totalSavings - washingMachine;
        console.log(`Yes! ${difference.toFixed(2)}`);

    } else if (totalSavings < washingMachine) {
        difference = washingMachine - totalSavings;
        console.log(`No! ${difference.toFixed(2)}`);

    }

}

cleverLily(["21", "1570.98", "3"]);

/*
Лили вече е на N години. За всеки свой рожден ден тя получава подарък. 
⦁	За нечетните рождени дни (1, 3, 5...n) получава играчки.
⦁	За четните рождени дни (2, 4, 6...n) получава пари. 

За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв., за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). 
През годините Лили тайно е спестявала парите. Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях. 
Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. С парите искала да си купи пералня за X лева. 
Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.

Вход
Програмата прочита 3 числа, въведени от потребителя, на отделни редове:
⦁	Възрастта на Лили - цяло число в интервала [1...77]
⦁	Цената на пералнята - число в интервала [1.00...10 000.00]
⦁	Единична цена на играчка - цяло число в интервала [0...40]

Изход
Да се отпечата на конзолата един ред:
⦁	Ако парите на Лили са достатъчни:
⦁	"Yes! {N}" - където N е остатъка пари след покупката
⦁	Ако парите не са достатъчни:
⦁	"No! {М}" - където M е сумата, която не достига
Числата N и M трябва да за форматирани до вторият знак след десетичната запетая.


*/