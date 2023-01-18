function evenPositionElement(array) {
  return array.filter((element, index) => index % 2 == 0).join(" ");
}

console.log(evenPositionElement(["20", "30", "40", "50", "60"]));
//20 40 60
console.log(evenPositionElement(["5", "10"]));
//5
