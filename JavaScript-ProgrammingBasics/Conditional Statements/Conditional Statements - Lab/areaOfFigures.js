function areaOfFigures(input) {
    let figureType = input[0];
    let squareSide = 0;
    let rectangleSideA = 0;
    let rectangleSideB = 0;
    let circleRadius = 0;
    let triangleSide = 0;
    let triangleHeight = 0;
    let areaResult = 0;

    if (figureType === "square") {
        squareSide = Number(input[1]);
        areaResult = squareSide * squareSide;

    } else if (figureType === "rectangle") {
        rectangleSideA = Number(input[1]);
        rectangleSideB = Number(input[2]);
        areaResult = rectangleSideA * rectangleSideB;

    } else if (figureType === "circle") {
        circleRadius = Number(input[1]);
        areaResult = circleRadius * circleRadius * Math.PI;

    } else if (figureType === "triangle") {
        triangleSide = Number(input[1]);
        triangleHeight = Number(input[2]);
        areaResult = 0.5 * triangleSide * triangleHeight;

    } else {
        console.log("There is no such figure!");
    }

    console.log(areaResult.toFixed(3));
}

areaOfFigures(["circle", "2", "3"]);
