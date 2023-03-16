/*
Write a class that represents a Circle. It has only one data property - 
its radius, and it is set through the constructor. The class needs to have getter and setter methods for its diameter - 
the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter 
and return it.
The circle also has a getter area(), which calculates and returns its area.
Input
The constructor function and diameter setter will receive valid parameters.
Output
The diameter() and area() getters should return numbers.
Submit the class definition as is, without wrapping it in any function
*/

class Circle {
  constructor(radius) {
    this.radius = Number(radius);
  }

  set diameter(newDiameter) {
    this.radius = Number(newDiameter) / 2;
  }

  get diameter() {
    return this.radius * 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

/*
Radius: 2
Diameter: 4
Area: 12.566370614359172
Radius: 0.8
Diameter: 1.6
Area: 2.0106192982974678
*/
