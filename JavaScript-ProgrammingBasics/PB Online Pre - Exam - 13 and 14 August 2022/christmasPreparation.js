function christmasPreparation(input) {
    
    let papper = Number(input[0]); 
    let fabric = Number(input[1]);
    let glue = Number(input[2]);
    let discount = Number(input[3]);

    let sum = ((100 - discount) / 100) * ((papper * 5.80) + (fabric * 7.20) + (glue * 1.20));

    console.log(sum.toFixed(3));

}

christmasPreparation(["2", "3", "2.5", "25"]);