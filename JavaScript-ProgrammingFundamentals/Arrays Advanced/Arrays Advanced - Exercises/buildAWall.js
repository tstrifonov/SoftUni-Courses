function buildAWall(input) {
    let concreteUsedDaily = [];
    let u = 0;
    let totalConcrete = 0;

    while (input[0] != undefined) {
        concreteUsedDaily[u] = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                input[i] += 1;
                concreteUsedDaily[u] += 195;
            } 
            
            if (input[i] == 30) {
                input.splice(i, 1);
                i--;
            }
        }
        u++;
    }

    for (let i = 0; i < concreteUsedDaily.length; i++) {
        totalConcrete += concreteUsedDaily[i];
    }

    console.log(concreteUsedDaily.join(", "));
    console.log(`${totalConcrete * 1900} pesos`);
}

//buildAWall([21, 25, 28]); 
/*585, 585, 390, 390, 390, 195, 195, 195, 195 
5928000 pesos
*/
//buildAWall([17]); 
/*195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195 
4816500 pesos
*/
//buildAWall([21, 25, 28]); 
/*975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585 
21489000 pesos 
*/
buildAWall([17, 22, 17, 19, 17]);
/*
975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585
21489000 pesos
*/