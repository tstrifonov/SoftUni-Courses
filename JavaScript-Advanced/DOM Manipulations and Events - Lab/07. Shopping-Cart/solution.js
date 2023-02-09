function solve() {
  const productsButtons = Array.from(
    document.getElementsByClassName("add-product")
  );
  const textArea = document.querySelector("textarea");

  for (let product of productsButtons) {
    product.addEventListener("click", () => {
      const productParent = product.parentElement.parentElement;
      console.log(productParent); //проверка
      const name = productParent.getElementsByClassName("product-title");
      console.log(name); //проверка
      const money = productParent.getElementsByClassName("product-line-price");
      console.log(money); //проверка
      textArea.textContent += `Added ${name.innerText} for ${money.innerText} to the cart.\n`;
    });
  }
}

//Защо по дяволите на мога да изкарам съдържанието от елементите name и money?
//Игнорирай как намирам parent-a. Ясно ми е, че може по-добре да стане.
//Това, което не мога да разбера е защо въпреки че съм хванал правилните елементи не мога да им изкарам съдържанието
