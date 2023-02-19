function solution() {
  let text = "";

  function append(input) {
    text += input;
  }

  function removeStart(n) {
    text = text.slice(n);
  }

  function removeEnd(n) {
    text = text.slice(0, -n);
  }

  function print() {
    console.log(text);
  }

  const objectFunctions = { append, removeStart, removeEnd, print };

  return objectFunctions;
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
//loa

let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
//34
