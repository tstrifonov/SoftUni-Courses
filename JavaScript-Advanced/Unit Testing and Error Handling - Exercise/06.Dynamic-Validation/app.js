function validate() {
  const inputField = document.getElementById("email");
  const emailRegex = /^[a-z0-9]*\@[a-z0-9]+\.[a-z0-9]+$/;
  inputField.addEventListener("change", () => {
    if (!emailRegex.test(inputField.value)) {
      inputField.classList.add("error");
    } else {
      inputField.classList.remove("error");
    }
  });
}
