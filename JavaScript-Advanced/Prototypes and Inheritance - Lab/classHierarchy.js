function result() {
  class Figure {
    constructor() {
      this.units = "cm";
      this.coef = 1;
    }

    area() {
      throw new Error("Area not implemented");
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super();
      this.units = units;
      if (this.units == undefined) {
        this.units = "cm";
      }
      this.coef = 1;
      if (units == "mm") {
        this.coef = 10;
      } else if (units == "m") {
        this.coef = 0.01;
      }
      this.radius = radius;
      this.area = Math.PI * this.radius * this.coef * this.radius * this.coef;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${
        this.radius * this.coef
      }`;
    }

    changeUnits(newUnits) {
      this.units = newUnits;
      if (newUnits == "mm") {
        this.coef = 10;
      } else if (newUnits == "m") {
        this.coef = 0.01;
      } else if (newUnits == "cm") {
        this.coef = 1;
      }
      this.area = Math.PI * this.radius * this.coef * this.radius * this.coef;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super();
      this.units = units;
      this.units = units;
      if (this.units == undefined) {
        this.units = "cm";
      }
      this.coef = 1;
      if (units == "mm") {
        this.coef = 10;
      } else if (units == "m") {
        this.coef = 0.01;
      }
      this.width = width;
      this.height = height;
      this.area = this.width * this.coef * this.height * this.coef;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${
        this.width * this.coef
      }, height: ${this.height * this.coef}`;
    }

    changeUnits(newUnits) {
      this.units = newUnits;
      if (newUnits == "mm") {
        this.coef = 10;
      } else if (newUnits == "m") {
        this.coef = 0.01;
      } else if (newUnits == "cm") {
        this.coef = 1;
      }
      this.area = this.width * this.coef * this.height * this.coef;
    }
  }
  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area);
//78.53981633974483
console.log(c.toString());
//  "Figures units: cm Area: 78.53981633974483 - radius: 5",

let r = new Rectangle(3, 4, "mm");
console.log(r.area);
//1200
console.log(r.toString());
//"Figures units: mm Area: 1200 - width: 30, height: 40",
r.changeUnits("cm");
console.log(r.area);
//12
console.log(r.toString());
//"Figures units: cm Area: 12 - width: 3, height: 4",

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
