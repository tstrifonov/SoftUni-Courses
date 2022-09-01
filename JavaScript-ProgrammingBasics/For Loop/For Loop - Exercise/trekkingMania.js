function trekkingMania(input) {
    let groups = Number(input[0]);
    let hikersTotal = 0;
    let hikersPerGroup = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let percentages = 0;

    for (let i = 1; i <= groups; i++) {
        hikersPerGroup = Number(input[i]);
        hikersTotal = hikersTotal + hikersPerGroup;

        if (hikersPerGroup <= 5) {
            p1 = p1 + hikersPerGroup;
        } else if (hikersPerGroup >= 6 && hikersPerGroup <= 12) {
            p2 = p2 + hikersPerGroup;
        } else if (hikersPerGroup >= 13 && hikersPerGroup <= 25) {
            p3 = p3 + hikersPerGroup;
        } else if (hikersPerGroup >= 26 && hikersPerGroup <= 40) {
            p4 = p4 + hikersPerGroup;
        } else if (hikersPerGroup >= 41) {
            p5 = p5 + hikersPerGroup;
        } 
    }

    percentages = p1 / hikersTotal * 100;
    console.log(`${percentages.toFixed(2)}%`);
    percentages = p2 / hikersTotal * 100;
    console.log(`${percentages.toFixed(2)}%`);
    percentages = p3 / hikersTotal * 100;
    console.log(`${percentages.toFixed(2)}%`);
    percentages = p4 / hikersTotal * 100;
    console.log(`${percentages.toFixed(2)}%`);
    percentages = p5 / hikersTotal * 100;
    console.log(`${percentages.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);

/*
Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
⦁	Група до 5 човека – изкачват Мусала
⦁	Група от 6 до 12 човека – изкачват Монблан
⦁	Група от 13 до 25 човека – изкачват Килиманджаро
⦁	Група от 26 до 40 човека –  изкачват К2
⦁	Група от 41 или повече човека – изкачват Еверест

Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.

Вход
От конзолата се четат поредица от числа, всяко на отделен ред:
⦁	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
⦁	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]

Изход
Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
⦁	Първи ред - процентът изкачващи Мусала
⦁	Втори ред – процентът изкачващи Монблан
⦁	Трети ред – процентът изкачващи Килиманджаро
⦁	Четвърти ред – процентът изкачващи К2
⦁	Пети ред – процентът изкачващи Еверест

*/