import { renderTask } from "./_renderData";
import { addButton, modal, textArea } from "./vars";
import { modalALert } from "./_modalAlert";
import { v4 as uuidv4 } from 'uuid';

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const text = textArea.value;
  const task = {
    text,
    done: false,
    id: uuidv4(),
  };
  addTask(task);
  console.log(task);
  modal.classList.add('inactive');
  renderTask();
});

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
  const newTasks = tasks.filter((task) => {
    if (task.id === id && task.done === true) {
      return false;
    } else {
      // alert('You can delete only checked tasks');
      //include modal window
      modalALert();
      return true;
    }
  } );
  localStorage.setItem('tasks', JSON.stringify(newTasks));
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

export { addTask, getTasks, deleteTask, checkedTask };

