function circleArea(input) {
  if (typeof input != "number") {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  } else {
    console.log((Math.PI * input ** 2).toFixed(2));
  }
}

circleArea(5);
circleArea("name");
