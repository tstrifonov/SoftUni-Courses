function nXnMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let u = 0; u < n; u++) {
        matrix[i].push(n);
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(" "));
    }

}

nXnMatrix(7);