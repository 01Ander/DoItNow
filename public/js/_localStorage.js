import { renderTask } from "./_renderData";
import { modalALert } from "./_modalAlert";
import '../sass/modules/_vars.sass'





function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

function deleteTask(id) {
  const tasks = getTasks();
  const taskToDelete = tasks.find((task) => task.id === id);
  if (taskToDelete.done === true) {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    renderTask(newTasks);
  } else {
    modalALert();
  }
}

function checkedTask(id) {
  const tasks = getTasks();
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.done = !task.done;
    } else {
      task.done = task.done;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

function editTask(id, text, dateTask, priority) {
  const tasks = getTasks();
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.text = text;
      task.dateTask = dateTask;
      task.priority = priority;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

export { addTask, getTasks, deleteTask, checkedTask, editTask };