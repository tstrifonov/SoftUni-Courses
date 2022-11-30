function numbers(input) {
    let num = input.split(" ");
    let sum = 0;
    let average = 0;
    let specialNum = [];

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    
    average = sum / num.length;

    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) > average) {
            specialNum.push(Number(num[i]));
        }
    }

    specialNum.sort(function (a, b) {
        return b - a;
    });

    if (specialNum.length == 0) {
        console.log("No");
    } else if (specialNum.length > 0 && specialNum.length <= 5) {
        console.log(specialNum.join(" "));
    } else if (specialNum.length > 5) {
        while (specialNum.length > 5) {
            specialNum.pop();
        }
        console.log(specialNum.join(" "));
    }
}

numbers('10 20 30 40 50'); //50 40
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'); //60 60 51 50 50
numbers('1'); //No
numbers('-1 -2 -3 -4 -5 -6'); //-1 -2 -3