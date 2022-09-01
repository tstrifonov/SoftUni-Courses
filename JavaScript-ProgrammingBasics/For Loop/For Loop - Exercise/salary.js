function salary(input) {
    let tabsOpen = Number(input[0]);
    let salaryCash = Number(input[1]);

    for (let i = 1; i <= tabsOpen; i++) {

        switch (input[i+1]) {
            case "Facebook": salaryCash = salaryCash - 150; break;
            case "Instagram": salaryCash = salaryCash - 100; break;
            case "Reddit": salaryCash = salaryCash - 50; break;
        }

        if (salaryCash <= 0) {
            console.log("You have lost your salary.");
            i = tabsOpen + 1;

        } 
    }

    if (salaryCash > 0) {
        console.log(salaryCash.toFixed(0));
    }

}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);