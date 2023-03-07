let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

/*
Your task is to test an object named mathEnforcer, which should have the following functionality: 
⦁	addFive(num) - A function that accepts a single parameter:
⦁	If the parameter is NOT a number, the function should return undefined.
⦁	If the parameter is a number, add 5 to it, and return the result.
⦁	subtractTen(num) - A function that accepts a single parameter:
⦁	If the parameter is NOT a number, the function should return undefined.
⦁	If the parameter is a number, subtract 10 from it, and return the result.
⦁	sum(num1, num2) - A function that accepts two parameters:
⦁	If any of the 2 parameters is NOT a number, the function should return undefined.
⦁	If both parameters are numbers, the function should return their sum. 
*/

const { expect } = require("chai");
const { assert } = require("chai");

describe("Test does mathEnforcer object has all the functionalities", () => {
  describe("Test does addFive(num) function works properly", () => {
    it("Should return undefined if the parameter is NOT a number", () => {
      expect(mathEnforcer.addFive("d")).to.equal(undefined);
    });
    it("Should return 10 if the parameter is 5", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it("Should return -5 if the parameter is -10", () => {
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
    });
    it("Should return 0 if the parameter is -5", () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });
    it("Should return 10.35 if the parameter is 5.35", () => {
      assert.equal(mathEnforcer.addFive(5.35), 10.35, 0.01);
    });
  });

  describe("Test does subtractTen(num) function works properly", () => {
    it("Should return undefined if the parameter is NOT a number", () => {
      expect(mathEnforcer.subtractTen("Test")).to.equal(undefined);
    });
    it("Should return 0 if the parameter is 10", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });
    it("Should return -30 if the parameter is -20", () => {
      expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
    });
    it("Should return 10.3 if the parameter is 20.3", () => {
      assert.equal(mathEnforcer.subtractTen(20.3), 10.3, 0.01);
    });
  });

  describe("Test does sum(num1, num2) function works properly", () => {
    it("Should return undefined if any of the parameters is NOT a number", () => {
      expect(mathEnforcer.sum("Test", 6)).to.equal(undefined);
    });
    it("Should return undefined if any of the parameters is NOT a number", () => {
      expect(mathEnforcer.sum(5, "Test")).to.equal(undefined);
    });
    it("Should return undefined if any of the parameters is NOT a number", () => {
      expect(mathEnforcer.sum("Test", "Test")).to.equal(undefined);
    });
    it("Should return their sum if both parameters are numbers", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it("Should return their sum if both parameters are numbers", () => {
      assert.equal(mathEnforcer.sum(5, 5.9), 10.9, 0.01);
    });
    it("Should return their sum if both parameters are numbers", () => {
      assert.equal(mathEnforcer.sum(-10, 5.5), -4.5, 0.01);
    });
  });
});
