function solve() {
  const taskField = document.querySelector("#task");
  const descriptionField = document.querySelector("#description");
  const dateField = document.querySelector("#date");
  const [addTask, open, inProgress, complete] =
    document.querySelectorAll("section");

  const addButton = document.getElementById("add");
  addButton.addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();
    /*
    if (
      taskField.value.trim() === "" ||
      descriptionField.value.trim() === "" ||
      dateField.value.trim() === ""
    ) {
      return;
    }

    console.log("not refresh");

    const newTask = document.createElement("article");
    const header = document.createElement("h3");
    header.textContent = taskField.value;
    newTask.appendChild(header);
    const paragraphDesription = document.createElement("p");
    paragraphDesription.textContent = descriptionField.value;
    newTask.appendChild(paragraphDesription);
    const paragraphDate = document.createElement("p");
    paragraphDate.textContent = dateField.value;
    newTask.appendChild(paragraphDate);
    const buttons = document.createElement("div");
    newTask.appendChild(buttons);
    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.classList("green");
    buttons.appendChild(startButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Start";
    deleteButton.classList("red");
    buttons.appendChild(deleteButton);

    open.appendChild(newTask);
    */
  }
}
