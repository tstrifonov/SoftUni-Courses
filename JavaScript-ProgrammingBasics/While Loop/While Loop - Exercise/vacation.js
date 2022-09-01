function vacation(input) {
    let index = 0;
    let tripPrice = Number(input[index]);
    index++;
    let savedCash = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let transactionSize = Number(input[index]);
    index++;
    let daysPassed = 0;
    let consecutiveSpendingDays = 0;

    while (savedCash < tripPrice) {
       
        if (action === "spend") {
            consecutiveSpendingDays++;
            savedCash = savedCash - transactionSize;
            if (savedCash < 0) {
                savedCash = 0;
            }
        } else if (action === "save") {
            consecutiveSpendingDays--;
            if (consecutiveSpendingDays < 0) {
                consecutiveSpendingDays = 0;
            }
            savedCash = savedCash + transactionSize;
        }

        daysPassed++;

        if (consecutiveSpendingDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysPassed}`);
            break;
        }

        
        action = input[index];
        index++;
        transactionSize = Number(input[index]);
        index++;
    }

    if (savedCash >= tripPrice) {
        console.log(`You saved the money for ${daysPassed} days.`);
    }

}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);