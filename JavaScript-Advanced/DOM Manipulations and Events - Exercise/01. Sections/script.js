function create(words) {
  const content = document.getElementById("content");

  words.forEach((word) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `<p>${word}</p>`;
    newElement.querySelector("p").style.display = "none";
    newElement.addEventListener("click", () => {
      newElement.querySelector("p").style.display = "block";
    });
    content.appendChild(newElement);
  });
}
