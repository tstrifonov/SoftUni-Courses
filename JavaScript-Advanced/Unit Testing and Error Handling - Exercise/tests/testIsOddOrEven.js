/*
We can see there are three outcomes for the function:
⦁	Returning undefined
⦁	Returning "even"
⦁	Returning "odd"
Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.
After we have checked the validation it's time to check whether the function works correctly with valid arguments. 
Write a test for each of the cases:
⦁	One where we pass a string with even length;
⦁	And one where we pass a string with an odd length;
Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.
*/

const { expect } = require("chai");
const isOddOrEven = require("../test.js");

describe("Check if isOddOrEven function works properly", () => {
  it("Should return undefined when the input is not a string", () => {
    expect(isOddOrEven(3)).to.undefined;
  });

  it("Should return odd when the input is a string with odd symbols", () => {
    expect(isOddOrEven("sdfgh")).to.equal("odd");
  });

  it("Should returneven when the input is a string with even symbols", () => {
    expect(isOddOrEven("sd")).to.equal("even");
  });
});
