//extensibleObject
/*
Create an object that can clone the functionality of another object into itself. 
Implement an extend(template) function that would copy all of the properties of the template to the parent object and 
if the property is a function, add it to the object’s prototype instead.
Input / Output
Your code should return the extensible object instance. 
The extend() function of your object will receive a valid object as an input parameter and has no output.
*/

function extensibleObject() {
  function ExtensibleObject() {}
  ExtensibleObject.prototype.extend = function (template) {
    Object.entries(template).forEach(([key, value]) => {
      if (value instanceof Function) {
        Object.getPrototypeOf(this)[key] = value;
      } else {
        this[key] = value;
      }
    });
  };
  return new ExtensibleObject();
}
