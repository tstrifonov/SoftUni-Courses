/*
Write a JS program which takes first & last names as parameters and 
returns an object with firstName, lastName and fullName 
( "{firstName} {lastName}" ) properties which should be all accessible, 
we discovered that "accessible" also means "mutable". This means that:
If firstName or lastName have changed, then fullName should also be changed.
If fullName is changed, then firstName and lastName should also be changed.
If fullName is invalid, you should not change the other properties.
 A valid full name is in the format: "{firstName} {lastName}".
*/

function Person(firstName, lastName) {
  const result = {
    firstName,
    lastName,
  };

  Object.defineProperty(result, "fullName", {
    enumerable: true,
    configurable: true,

    get() {
      return `${result.firstName} ${result.lastName}`;
    },

    set(input) {
      if (input.split(" ").length == 2) {
        [result.firstName, result.lastName] = input.split(" ");
      }
    },
  });

  return result;
}
/*
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
*/

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson
