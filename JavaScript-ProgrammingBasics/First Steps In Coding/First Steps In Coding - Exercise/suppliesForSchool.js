function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let discount = Number(input[3]);

    let totalSum = Number(((pens * 5.80) + (markers * 7.20) + (liquid * 1.20)) * ((100-discount)/100));

    console.log (totalSum);
}

suppliesForSchool(["2", "3", "4", "25"]);