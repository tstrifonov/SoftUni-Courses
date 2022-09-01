function radiansToDegrees(input) {
    let radian = Number(input[0]);
    let angle = Number(radian * 180 / Math.PI);

    console.log (angle);
}

radiansToDegrees(["2"]);