function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let floorDimension = base;
    let floorCount = 1;

    if (floorDimension < 3) {
        gold += floorDimension * floorDimension;
    }

    while (floorDimension > 2) {
        
        stone += (floorDimension - 2) * (floorDimension - 2);
        
        if (floorCount % 5 === 0) {
            lapisLazuli += (floorDimension - 1) * 4;
        } else {
            marble += (floorDimension - 1) * 4;
        }

        floorDimension -= 2;
        floorCount++;

        if (floorDimension < 3) {
            gold = floorDimension * floorDimension;
            break;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(floorCount * increment)}`);

}

thePyramidOfKingDjoser(1, 1);