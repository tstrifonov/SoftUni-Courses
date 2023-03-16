function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  const arrayPersons = [];
  arrayPersons.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"));
  arrayPersons.push(new Person("SoftUni"));
  arrayPersons.push(new Person("Stephan", "Johnson", 25));
  arrayPersons.push(new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"));

  return arrayPersons;
}

console.log(getPersons());
