function solve() {
  const table = document.querySelector("tbody");
  const [inputTextArea, resultTextArea] = Array.from(
    document.querySelectorAll("#exercise textarea")
  );
  const [generateButton, buyButton] = Array.from(
    document.querySelectorAll("#exercise button")
  );

  generateButton.addEventListener("click", generate);

  function generate() {
    const arrayOfObjects = JSON.parse(inputTextArea.value);
    for (let itemObject of arrayOfObjects) {
      const newRow = document.createElement("tr");

      const image = document.createElement("td");
      image.innerHTML = `<img\nsrc=${itemObject["img"]}>`;

      const name = document.createElement("td");
      name.innerHTML = `<p>${itemObject["name"]}</p>`;

      const price = document.createElement("td");
      price.innerHTML = `<p>${itemObject["price"]}</p>`;

      const decFactor = document.createElement("td");
      decFactor.innerHTML = `<p>${itemObject["decFactor"]}</p>`;

      const markedBox = document.createElement("td");
      markedBox.innerHTML = `<input type="checkbox" disabled />`;

      newRow.appendChild(image);
      newRow.appendChild(name);
      newRow.appendChild(price);
      newRow.appendChild(decFactor);
      newRow.appendChild(markedBox);

      table.appendChild(newRow);
    }

    Array.from(document.querySelectorAll("tbody tr input")).forEach(
      (button) => (button.disabled = false)
    );
  }

  buyButton.addEventListener("click", buy);

  function buy() {
    let boughtStuff = [];
    let totalPrice = 0;

    Array.from(document.querySelectorAll("tbody tr")).forEach((row) => {
      if (row.querySelector("input").checked) {
        let [name, price, decFactor] = row.querySelectorAll("td p");
        boughtStuff.push(name.textContent);
        totalPrice += Number(price.textContent);
      }
    });

    resultTextArea.textContent = `Bought furniture: ${boughtStuff.join(
      ", "
    )}.\nTotal price: ${totalPrice.toFixed(2)}.`;
  }
}
