function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let chickenMenuSum = chickenMenu  * 10.35;
    let fishMenuSum = fishMenu * 12.40;
    let veggieMenuSum = veggieMenu * 8.15;

    let menuTotal = chickenMenuSum + fishMenuSum + veggieMenuSum;
    let desertSum = menuTotal * 0.2;
    let delivery = 2.50;

    let total = (menuTotal + desertSum + delivery).toFixed(2);

    console.log (total);
}

foodDelivery(["2", "3", "4"]);
