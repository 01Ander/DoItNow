import { getTasks } from "./_localStorage";
import { buttonEdit } from "./vars";
import { openModal } from "./_modal";
import { renderTask } from "./_renderData";

buttonEdit.addEventListener("click", () => {
  console.log("edit");
  const findTitle = document.querySelector(".editTask");
  findTitle.innerText = "Make click on task to edit it";
  const tasks = document.querySelectorAll(".main__item");
  tasks.forEach((task) => {
    task.addEventListener("click", () => {
      const taskDescription = task.querySelector(".main__item-text")
      const taskDate = task.querySelector(".main__item-date")
      const taskPriority = task.querySelector(".main__item-priority")
      const valueDescription = taskDescription.textContent
      const valueDate = taskDate.textContent
      const valuePriority = taskPriority.textContent
      console.log(valueDescription, valueDate, valuePriority);
      const tasksSave = getTasks();
      //find task by text
      const taskToEdit = tasksSave.find((task) => task.text === valueDescription);
      openModal( taskToEdit.text, valueDate, taskToEdit.priority, taskToEdit.id);
      renderTask(tasksSave);
      findTitle.innerText = "";
    });
  });
});






