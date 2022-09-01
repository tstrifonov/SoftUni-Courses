function cinemaVoucher(input) {
    let index = 0;
    let voucher = Number(input[index]);
    index++;
    let purchase = "" + input[index];
    index++;
    let purchasePrice = 0;
    let ticketsBought = 0;
    let otherPurchases = 0;

    while (purchase !== "End") {
        
        if (purchase.length > 8) {
            purchasePrice = purchase.charCodeAt(0) + purchase.charCodeAt(1);
            voucher = voucher - purchasePrice;
            if (voucher < 0) {
                break;
            }
            ticketsBought++;
        } else if (purchase.length <= 8) {
            purchasePrice = purchase.charCodeAt(0);
            voucher = voucher - purchasePrice;
            if (voucher < 0) {
                break;
            }
            otherPurchases++;
        }

        if (voucher <= 0) {
            break;
        }

        purchase = "" + input[index];
        index++;

    }

    console.log(ticketsBought);
    console.log(otherPurchases);

}

cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);