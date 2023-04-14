import { getTasks } from "./_localStorage.js";
import { renderTask } from "./_renderData.js";
import { searchInput } from "./vars.js";

function searchTask(value) {
  const tasks = getTasks();
  const searchedTasks = tasks.filter((task) => {
    const taskText = task.text.toLowerCase();
    const valueText = value.toLowerCase();
    return taskText.includes(valueText);
  });
  console.log(searchedTasks);
  renderTask(searchedTasks);
}

searchInput.addEventListener("input", (e) => {
  searchTask(e.target.value);
  console.log(e.target.value);
});

