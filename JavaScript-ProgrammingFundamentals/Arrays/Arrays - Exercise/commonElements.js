function commonElements(arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {
        for (let y = 0; y < arrB.length; y++) {
            if (arrA[i] === arrB[y]) {
                console.log(arrA[i]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);