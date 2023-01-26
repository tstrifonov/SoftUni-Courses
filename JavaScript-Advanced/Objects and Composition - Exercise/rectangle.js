function rectangle(width, height, color) {
  let rectangleObject = {
    width,
    height,
    color: color.split("")[0].toUpperCase() + color.slice(1),
    calcArea() {
      return this.width * this.height;
    },
  };

  return rectangleObject;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

/*
4
5
Red
20
*/
