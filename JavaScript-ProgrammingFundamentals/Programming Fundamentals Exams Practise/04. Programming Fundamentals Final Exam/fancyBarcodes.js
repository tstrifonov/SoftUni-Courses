function fancyBarcodes(input) {
    let n = Number(input.shift());
    let filter = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    for (let i = 0; i < n; i++) {
        let barcode = input[i];
        if (filter.test(barcode)) {
            let digitFilter = /\d/g;
            let allDigits = barcode.match(digitFilter)
            if (allDigits!= null) {
                let productGroup = allDigits.join("");
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]));
/*
Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00
*/