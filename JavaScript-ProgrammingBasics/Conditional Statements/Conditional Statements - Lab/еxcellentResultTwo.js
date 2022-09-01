function excellentResult(input) {
    let score = Number(input[0]);

    if (score >= 5.50) {
        console.log("Excellent!");
    } else {
        console.log("Not Excellent!");
    }
}

excellentResult(["4.50"]);