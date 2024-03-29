/*
Extend the built-in Array object with additional functionality. 
Implement the following functionality:
⦁	last() - returns the last element of the array
⦁	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
⦁	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
⦁	sum() - returns a sum of all array elements
⦁	average() - returns the average of all array elements
*/

(function arrayExtensions() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    return this.slice(n);
  };
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
  Array.prototype.sum = function () {
    let sum = 0;
    for (let num of this) {
      sum += num;
    }
    return sum;
  };
  Array.prototype.average = function () {
    let sum = 0;
    for (let num of this) {
      sum += num;
    }
    return sum / this.length;
  };
})();
