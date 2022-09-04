function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let currentN = "" + i;
        let sum = 0;
        
        for (let y = 0; y < currentN.length; y++) {
            sum += Number(currentN[y]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${currentN} -> True`);
        } else {
            console.log(`${currentN} -> False`); 
        }
    }
}

specialNumbers(20);