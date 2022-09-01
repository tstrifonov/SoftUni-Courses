function invalidNumber(input) {
    let a = Number(input[0]);

    if ((a >= 100 && a <= 200) || a === 0) {
    
    } else {
        console.log("invalid");
    }
}

invalidNumber(["1"]);