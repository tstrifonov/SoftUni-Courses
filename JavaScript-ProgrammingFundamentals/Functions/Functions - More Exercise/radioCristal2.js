function radioCrystal2(input) {
    let desiredThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);

        currentThickness = cutFunction(currentThickness);
        currentThickness = lapFunction(currentThickness);
        currentThickness = grindFunction(currentThickness);
        currentThickness = etchFunction(currentThickness);
        currentThickness = xRayFunction(currentThickness);

        console.log(`Finished crystal ${Math.floor(currentThickness)} microns`);
    }

    function cutFunction(crystalThickness) {
        let cut = 0;
        while (crystalThickness / 4 >= desiredThickness) {
            crystalThickness = crystalThickness / 4;
            cut++;
        }

        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
        }

        return crystalThickness;
    }

    function lapFunction(crystalThickness) {
        let lap = 0;
        while (crystalThickness * 0.8 >= desiredThickness) {
            crystalThickness = crystalThickness * 0.8;
            lap++;
        }

        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }

        return crystalThickness;
    }

    function grindFunction(crystalThickness) {
        let grind = 0;
        while (crystalThickness - 20 >= desiredThickness) {
            crystalThickness = crystalThickness - 20;
            grind++;
        }

        if (grind > 0) {
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
        }

        return crystalThickness;
    }

    function etchFunction(crystalThickness) {
        let etch = 0;
        while (crystalThickness - 2 >= desiredThickness - 1) {
            crystalThickness = crystalThickness - 2
            etch++;
        }

        if (etch > 0 ) {
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        }

        return crystalThickness;
    }

    function xRayFunction(crystalThickness) {
        let xRay = 0;
        if (crystalThickness + 1 == desiredThickness) {
            crystalThickness = crystalThickness + 1
            xRay++;
            console.log(`X-ray x${xRay}`);
        }

        return crystalThickness;
    }
}

radioCrystal2([1000, 8100]);
/*
Processing chunk 4000 microns
Cut x1
Transporting and washing
Finished crystal 1000 microns
Processing chunk 8100 microns
Cut x1
Transporting and washing
Lap x3
Transporting and washing
Grind x1
Transporting and washing
Etch x8
Transporting and washing
Finished crystal 1000 microns
*/