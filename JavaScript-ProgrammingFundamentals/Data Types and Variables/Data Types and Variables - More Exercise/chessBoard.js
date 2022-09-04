function chessBoard(n) {
    let counter = 1;  
    console.log(`<div class="chessboard">`);

    for (let i = 1; i <= n; i++) {
       console.log(`  <div>`);
        for (let y = 1; y <= n; y++) {
            if (counter % 2 != 0) {
                console.log(`    <span class="black"></span>`);
            } else {
                console.log(`    <span class="white"></span>`);
            }
            counter++;
        }

        if (n % 2 == 0) {
            counter++;
        }

        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chessBoard(5);