function cookingByNames(num, opOne, opTwo, opThree, opFour, opFive) {
    let numb = Number(num);
    let operations = [opOne, opTwo, opThree, opFour, opFive];

    for (let i = 0; i < 5; i ++) {
        let operator = operations[i];

        switch(operator) {
            case "chop": numb /= 2; break;
            case "dice": numb = Math.sqrt(numb); break;
            case "spice": numb += 1; break;
            case "bake": numb *= 3; break;
            case "fillet": numb *= 0.8;	break;
        }

        console.log(numb);
    }
}

cookingByNames('32', 'chop', 'chop', 'chop', 'chop', 'chop');
/*
16
8
4
2
1
*/
cookingByNames('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
/*
3
4
2
6
4.8
*/