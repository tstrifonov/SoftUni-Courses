function specialNumbers(input) {
    let n = Number(input[0]);
    let allNum = "";
   
    for (let x = 1111; x <= 9999; x++) {
        let currentNum = "" + x;
        let specialOrNot = "special";
        for (let y = 0; y < currentNum.length; y++) {
            if (n % String(currentNum[y]) != 0) {
                specialOrNot = "not";
                break;
            }
        }

        if (specialOrNot === "special") {
            allNum = allNum + ` ${currentNum}`;
        }
    }

    console.log(allNum);
}

specialNumbers(["3"]);