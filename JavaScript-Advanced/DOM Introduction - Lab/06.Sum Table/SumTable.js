function sumTable() {
  let table = document.querySelectorAll("table tr");
  let sum = 0;

  for (let row = 1; row < table.length - 1; row++) {
    let collumns = table[row].children;
    let costValue = Number(collumns[collumns.length - 1].textContent);
    sum += costValue;
  }

  let total = document.getElementById("sum");
  total.textContent = sum;
}
