function solve() {
  const taskField = document.querySelector("#task");
  const descriptionField = document.querySelector("#description");
  const dateField = document.querySelector("#date");
  const [addTask, open, inProgress, complete] =
    document.querySelectorAll("section");

  const addButton = document.getElementById("add");
  addButton.addEventListener("click", addToDo);

  function addToDo(event) {
    event.preventDefault();
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
    startButton.classList.add("green");
    startButton.addEventListener("click", moveToInProgress);
    buttons.appendChild(startButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("red");
    deleteButton.addEventListener("click", deleteTask);
    buttons.appendChild(deleteButton);

    open.appendChild(newTask);

    taskField.value = "";
    descriptionField.value = "";
    dateField.value = "";

    function moveToInProgress() {
      startButton.remove();
      const finishButton = document.createElement("button");
      finishButton.textContent = "Finish";
      finishButton.classList.add("orange");
      finishButton.addEventListener("click", moveToComplete);
      buttons.appendChild(finishButton);
      inProgress.appendChild(newTask);
    }

    function deleteTask() {
      newTask.remove();
    }

    function moveToComplete() {
      buttons.remove();
      complete.appendChild(newTask);
    }
  }
}
