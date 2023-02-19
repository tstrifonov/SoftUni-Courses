function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((button) => {
    button.addEventListener("click", onClick);
  });

  function onClick(event) {
    const parent = event.target.parentElement;
    const unlockedCheck = parent.querySelector('input[value="unlock"]');

    if (unlockedCheck.checked) {
      const hiddenText = parent.querySelector("div");

      hiddenText.style.display === "block"
        ? (hiddenText.style.display = "none")
        : (hiddenText.style.display = "block");
      event.target.textContent === "Show more"
        ? (event.target.textContent = "Hide it")
        : (event.target.textContent = "Show more");
    }
  }
}
