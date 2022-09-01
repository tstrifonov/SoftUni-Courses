function accountBalance(input) {
    let index = 0;
    let transactionType = input[index];
    let accountTotal = 0;

   while (transactionType !== "NoMoreMoney" ) {
    let transactionSize = Number(transactionType);

    if (transactionSize < 0) {
        console.log(`Invalid operation!`);
        break;
    }

    accountTotal += transactionSize;
    console.log(`Increase: ${transactionSize.toFixed(2)}`)
    index++;
    transactionType = input[index];
   }

   console.log(`Total: ${accountTotal.toFixed(2)}`);

}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);