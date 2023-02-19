function addItem() {
  const newItemText = document.getElementById("newItemText");
  const newItemValue = document.getElementById("newItemValue");

  const newItem = document.createElement("option");
  newItem.textContent = newItemText.value;
  newItem.value = newItemValue.value;

  const menu = document.getElementById("menu");

  menu.appendChild(newItem);

  newItemText.value = "";
  newItemValue.value = "";
}
