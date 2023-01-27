function colorize() {
  let table = document.querySelectorAll("table tr");

  for (let row = 1; row < table.length; row += 2) {
    table[row].style.background = "Teal";
  }
}
