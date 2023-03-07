const { expect } = require("chai");

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

/*
Write unit tests for a function that retrieves a character at a given index from a passed-in string.
You are given a function named lookupChar(), which has the following functionality:
⦁	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
⦁	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
⦁	If both parameters are of the correct type but the value of the index is incorrect 
(bigger than or equal to the string length or a negative number) - return "Incorrect index". 
⦁	If both parameters have correct types and values - return the character at the specified index in the string.
*/

describe("Check does lookupChar function works properly", () => {
  it("Should return undefined if both first and second input are from the wrong type", () => {
    expect(lookupChar(5, "Test")).to.equal(undefined);
  });
  it("Should return undefined if first input is not a string", () => {
    expect(lookupChar(5, 5)).to.equal(undefined);
  });
  it("Should return undefined if second input is not a number", () => {
    expect(lookupChar("Test", "Test")).to.equal(undefined);
  });
  it("Should return undefined if second input is not an integer", () => {
    expect(lookupChar("Test", 2.69)).to.equal(undefined);
  });
  it('Should return "Incorrect index" if both parameters are of the correct type but the value of the index is incorrect ', () => {
    expect(lookupChar("Test", -5)).to.equal("Incorrect index");
  });
  it('Should return "Incorrect index" if both parameters are of the correct type but the value of the index is incorrect ', () => {
    expect(lookupChar("Test", 565656)).to.equal("Incorrect index");
  });
  it("Should return the character at the specified index in the string if both parameters have correct types and values", () => {
    expect(lookupChar("Test", 0)).to.equal("T");
  });
  it("Should return the character at the specified index in the string if both parameters have correct types and values", () => {
    expect(lookupChar("Test", 1)).to.equal("e");
  });
});
