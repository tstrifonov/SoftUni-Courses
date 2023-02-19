function encodeAndDecodeMessages() {
  const firstInput = document.querySelector(
    'textarea[placeholder="Write your message here..."]'
  );
  const secondInput = document.querySelector(
    'textarea[placeholder="No messages..."]'
  );
  const firstButton = firstInput.parentElement.querySelector("button");
  const secondButton = secondInput.parentElement.querySelector("button");

  firstButton.addEventListener("click", () => {
    const text = firstInput.value;
    let encodedText = text.split("");
    for (let i = 0; i < encodedText.length; i++) {
      let asciiNumber = encodedText[i].charCodeAt(0);
      asciiNumber++;
      encodedText[i] = String.fromCharCode(asciiNumber);
    }

    secondInput.textContent = encodedText.join("");
    firstInput.textContent = "";
  });

  secondButton.addEventListener("click", () => {
    const text = secondInput.value;
    let encodedText = text.split("");
    for (let i = 0; i < encodedText.length; i++) {
      let asciiNumber = encodedText[i].charCodeAt(0);
      asciiNumber--;
      encodedText[i] = String.fromCharCode(asciiNumber);
    }

    secondInput.textContent = encodedText.join("");
  });
}
