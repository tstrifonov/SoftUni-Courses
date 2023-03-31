(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    return this.endstsWith(str) ? this.toString() : this.toString() + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    }
    if (this.length <= n) {
      return this.toString();
    }
    if (this.length > n) {
      if (this.includes(" ") == false) {
        return this.slice(0, n - 3) + "...";
      }
      let arr = this.split(" ");
      let result = arr.shift();

      while (result.length <= n - 3) {
        let word = arr.shift();
        if ((result + " " + word).length <= n - 3) {
          result += " " + word;
        } else {
          result += "...";
          break;
        }
      }

      return result;
    }
  };

  String.format = function (str, ...params) {
    return str.replace(/\{(\d+)\}/g, function (match, index) {
      return typeof params[index] !== "undefined" ? params[index] : match;
    });
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);

/*

'my string'       // 'my' already present
'hello my string'
'hello my string' // length is 15
'hello my...'     // length is 11
'hello...'
'h...'
'..'

'The quick brown fox'

'jumps dog {1}'   // no parameter at 1
*/

/*
var testString = "quick brown fox jumps over the lazy dog";
console.log(String.prototype.hasOwnProperty("ensureStart"));
var answer = testString.ensureStart("the ");
console.log(answer);
answer = answer.ensureStart("the ");
console.log(answer);
*/

/*
var testString = 'quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
var answer = testString.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
answer = answer.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');
*/
