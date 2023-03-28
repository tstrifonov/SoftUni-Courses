/*Write a function that receives a class and attaches to it a property species with the value "Human" 
and a function toSpeciesString(). When called, the function returns a string with the format:
"I am a <species>. <toString()>"
The function toString() is called from the current instance (call using this).
Input / Output
Your function will receive a class whose prototype it should extend. 
There is NO output, your function should only attach the properties to the given class’ prototype.

*/
function result(classToExtend) {
  classToExtend.prototype.species = "Human";
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${classToExtend.prototype.species}. ${this.toString()}`;
  };
}

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  toString() {
    let className = this.constructor.name;
    return `${className} (name: ${this.name}, email: ${this.email})`;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
  toString() {
    let baseStr = super.toString().slice(0, -1);
    return baseStr + `, subject: ${this.subject})`;
  }
}

class Student extends Person {
  constructor(name, email, course) {
    super(name, email);
    this.course = course;
  }
  toString() {
    let baseStr = super.toString().slice(0, -1);
    return baseStr + `, course: ${this.course})`;
  }
}

result(Person);
let p = new Person("Pesho", "email@hit.bg");
console.log(p.species);
//expect(p.species).to.equal('Human',"No species property");
console.log(p.toSpeciesString());
//expect(p.toSpeciesString()).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");
