import { renderTask } from "./_renderData";
import { addButton, modal, textArea } from "./vars";
import { modalALert } from "./_modalAlert";
import { progress } from "./_progress";
import { v4 as uuidv4 } from 'uuid';
import '../sass/modules/_vars.sass'

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const text = textArea.value;
  const task = {
    text,
    done: false,
    id: uuidv4(),
  };
  //not add empty task
  if (text === '') {
    textArea.placeholder = 'Be careful, you can not add an empty task';
    textArea.id = 'modal__input--error';
    console.log('empty task');
    setTimeout(() => {
      textArea.id = 'modal__input';
    }, 2000);
    return;
  }

  addTask(task);
  console.log(task);
  modal.classList.add('inactive');
  renderTask();
  progress();
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
  const taskToDelete = tasks.find((task) => task.id === id);
  if (taskToDelete.done === true) {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    renderTask();
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





export { addTask, getTasks, deleteTask, checkedTask };

