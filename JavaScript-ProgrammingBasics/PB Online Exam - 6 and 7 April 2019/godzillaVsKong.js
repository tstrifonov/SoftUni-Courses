function godzillaVsKong(input) {
    let budjet = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);
    let decor = budjet * 0.1;

    if(extras > 150) {
        clothing = clothing * 0.9;
    }

    let sum = (clothing * extras) + decor;

    if (budjet < sum) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budjet).toFixed(2)} leva more.`)
    } else if (budjet >= sum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet - sum).toFixed(2)} leva left.`);
    }


}

godzillaVsKong(["20000", "120", "55.5"]);