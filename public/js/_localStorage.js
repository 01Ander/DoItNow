import { renderTask } from "./_renderData";
import { addButton, modal, textArea, date, input } from "./vars";
import { modalALert } from "./_modalAlert";
import { progress } from "./_progress";
import { v4 as uuidv4 } from 'uuid';
import '../sass/modules/_vars.sass'
import { closeModal } from "./_mediaQueryModal";


addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const text = textArea.value;
  const dateTask = date.value;
  const priority = input.value;
  const task = {
    text,
    dateTask,
    priority,
    done: false,
    id: uuidv4(),
  };
  switch (true) {
    case text === '':
      textArea.placeholder = 'Be careful, you can not add an empty task';
      textArea.id = 'error';
      setTimeout(() => {
        textArea.id = 'modal__input';
      }, 2000);
      return;
    case dateTask === '':
      date.id = 'error';
      setTimeout(() => {
        date.id = 'modal__input';
      }, 2000);
      return;
    case priority === '':
      input.placeholder = 'Be careful, you can not add an empty task';
      input.id = 'error';
      setTimeout(() => {
        input.id = 'modal__input';
      }, 2000);
      return;
  }
  closeModal();
  addTask(task);
  const newTasks = getTasks();
  renderTask( newTasks );
  progress();
  textArea.value = '';
  date.value = '';
  input.value = '';
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

export { addTask, getTasks, deleteTask, checkedTask };