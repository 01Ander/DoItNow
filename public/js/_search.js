import { getTasks } from "./_localStorage.js";
import { renderTask } from "./_renderData.js";
import { searchInput } from "./vars.js";

function searchTask(value) {
  const tasks = getTasks();
  const searchedTasks = tasks.filter((task) => {
    const valueText = value.toLowerCase();
    const taskText = task.text.toLowerCase();
    const taskPriority = task.priority.toLowerCase();
    const taskDate = task.dateTask;
    return (
      taskText.includes(valueText) ||
      taskDate.includes(valueText) ||
      taskPriority.includes(valueText)
    );
  });
  renderTask(searchedTasks);
}

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  searchTask(e.target.value);
});

