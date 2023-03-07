function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

module.exports = isOddOrEven;
// A property that makes the code assigned to it public. Allows the assigned code to be used in other files.
