function magicMatrices(arr) {
    let n = arr.length;
    let flag = true;

    //намиране сумата за проверка
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[0][i]
    }

    //хоризонтална проверка

    for (let i = 0; i < arr.length; i++) {
        let horSum = 0;
        for (let u = 0; u < arr.length; u++) {
            horSum += arr[i][u];
        }
        if (horSum != sum) {
            flag = false;
        }
    }

    
    //вертикална проверка
    for (let i = 0; i < arr.length; i++) {
        let verSum = 0;
        for (let u = 0; u < arr.length; u++) {
            verSum += arr[u][i];
        }
        if (verSum != sum) {
            flag = false;
        }
    }
    

    console.log(flag);

}

magicMatrices([[4, 5, 6], 
               [6, 5, 4], 
               [5, 5, 5]]); //true
magicMatrices([[11, 32, 45], 
               [21, 0, 1], 
               [21, 1, 1]]); //false
magicMatrices([[1, 0, 0], 
               [0, 0, 1], 
               [0, 1, 0]]); //true

/*
A matrix is magical if the sums of the cells of 
every row and every column are equal. 
*/
