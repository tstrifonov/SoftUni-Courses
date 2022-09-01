function basketballEquipment(input) {
    let taxPerYear = Number(input[0]);
    let shoes = taxPerYear * 0.6;
    let clothes = shoes * 0.8;
    let ball = clothes * 0.25;
    let accessories = ball * 0.2;

    let sumFinal = taxPerYear + shoes + clothes + ball + accessories;

    console.log (sumFinal);
}

basketballEquipment(["20"]);