function spiceMustFlow(startingYield) {
    let dailyYield = startingYield;
    let days = 0;
    let spiceTotal = 0;

    while (dailyYield >= 100) {
        spiceTotal += dailyYield - 26;
        days++;
        dailyYield -= 10;
    }

    if (spiceTotal >= 26) {
        spiceTotal -= 26;
    }

    console.log(days);
    console.log(spiceTotal);
}

spiceMustFlow(111);
spiceMustFlow(450);