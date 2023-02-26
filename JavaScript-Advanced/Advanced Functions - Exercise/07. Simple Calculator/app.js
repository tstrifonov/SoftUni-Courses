function calculator() {
  let inputField1;
  let inputField2;
  let resultField;

  return {
    init: (selector1, selector2, resultSelector) => {
      inputField1 = document.querySelector(selector1);
      inputField2 = document.querySelector(selector2);
      resultField = document.querySelector(resultSelector);
    },

    add: () => {
      resultField.value = Number(inputField1.value) + Number(inputField2.value);
    },
    subtract: () => {
      resultField.value = Number(inputField1.value) - Number(inputField2.value);
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
