import { renderTask } from "./_renderData";
import { addButton, modal, textArea, date, input, attentionDescription, attentionDate, attentionPriority } from "./vars";
import { modalALert } from "./_modalAlert";
import { progress } from "./_progress";
import { v4 as uuidv4 } from 'uuid';
import '../sass/modules/_vars.sass'
import { closeModal } from "./_mediaQueryModal";
import { optionValue, showOptions } from "./_form";


addButton.addEventListener('click', (e) => {
  e.preventDefault();
  showOptions();
  const text = textArea.value;
  const dateTask = date.value;
  const priority = input.value;

  const actualDate = new Date();
  const actualDateFormatted = actualDate.toISOString().slice(0, 10);
  console.log('actualDateFormatted', actualDateFormatted);
  console.log('dateTask', dateTask);

  const dateTaskNumber = Number(dateTask.split('-').join(''));
  const actualDateNumber = Number(actualDateFormatted.split('-').join(''));
  console.log('dateTaskNumber', dateTaskNumber);
  console.log('actualDateNumber', actualDateNumber);

  const task = {
    text,
    dateTask,
    priority,
    done: false,
    id: uuidv4(),
  };
  switch (true) {
    case text === '':
      attentionDescription.innerText= 'Be careful, you can not add an empty task';
      textArea.id = 'error';
      setTimeout(() => {
        attentionDescription.innerText= '';
        textArea.id = 'modal__input';
      }, 5000);
      return;
    case dateTask === '':
      attentionDate.innerText= 'Be careful, select a valid date';
      date.id = 'error';
      setTimeout(() => {
        attentionDate.innerText= '';
        date.id = 'modal__input';
      }, 5000);
      return;
    case ( dateTaskNumber < actualDateNumber):
      attentionDate.innerText= 'Be careful, select a valid date';
      date.id = 'error';
      setTimeout(() => {
        attentionDate.innerText= '';
        date.id = 'modal__input';
      }
      , 5000);
      return;
    case priority === '':
      console.log('en el case ',priority);
      attentionPriority.innerText = 'Be careful, select a priority by the list';
      input.id = 'error';
      setTimeout(() => {
        attentionPriority.innerText = '';
        input.id = 'modal__input';
      }, 5000);
      input.placeholder = 'Be careful, select a priority by the list. Click in the input to see the list';
      input.id = 'error';
      return;
  }

  if (priority === 'High') {
    task.priority = 'High';
  } else if (priority === 'Medium') {
    task.priority = 'Medium';
  } else if (priority === 'Low') {
    task.priority = 'Low';
  } else if (priority === 'Important') {
    task.priority = 'Important';
  } else if (priority === 'Optional') {
    task.priority = 'Optional';
  } else {
    attentionPriority.innerText = 'Be careful, select a priority by the list';
    input.id = 'error';
    setTimeout(() => {
      attentionPriority.innerText = '';
      input.id = 'modal__input';
    }, 5000);
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