function areaOfFigures(input) {
    let figureType = input[0];
    a = Number(input[1]);
    b = Number(input[2]);
    let areaResult = 0;

    if (figureType === "square") {
        areaResult = a * a;

    } else if (figureType === "rectangle") {
        areaResult = a * b;

    } else if (figureType === "circle") {
        areaResult = a * a * Math.PI;

    } else if (figureType === "triangle") {
        areaResult = 0.5 * a * b;
    } 

    console.log(areaResult.toFixed(3));
}

areaOfFigures(["circle", "2", "3"]);
