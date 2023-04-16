import { showOptions } from './_form.js';
import { v4 as uuidv4 } from 'uuid';
import { attentionDescription, attentionDate, attentionPriority, addButton, date, input, modal, textArea, mainButton, modalButtonCancel, priorityInput } from './vars.js';
import { editTask, getTasks } from './_localStorage.js';
import { renderTask } from './_renderData.js';
import { progress } from './_progress.js';
import { addTask } from './_localStorage.js';


mainButton.addEventListener('click', () => {
  openModal( '', '', '', '');
});
modalButtonCancel.addEventListener('click', closeModal);

const mediaQuery = window.innerWidth

function openModal(textValue, dateValue, priorityValue, idValue) {
  console.log('id ',idValue);
  if (idValue==='') {
    console.log('openModal');
    textArea.value = textValue;
    date.value = dateValue;
    priorityInput.value = priorityValue;
    textArea.setAttribute('id','modal__input')
    textArea.placeholder='Add yor new task';
    showOptions();
    modal.classList.remove('inactive');
    addNewTask();
  } else {
    console.log('open by edit');
    textArea.value = textValue;
    date.value = dateValue;
    priorityInput.value = priorityValue;
    textArea.setAttribute('id','modal__input')
    showOptions();
    modal.classList.remove('inactive');
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const text = textArea.value;
      const dateTask = date.value;
      const priority = input.value;
      const actualDate = new Date();
      const actualDateFormatted = actualDate.toISOString().slice(0, 10);
      const dateTaskNumber = Number(dateTask.split('-').join(''));
      const actualDateNumber = Number(actualDateFormatted.split('-').join(''));
      const task = {
        text,
        dateTask,
        priority
      }
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
      editTask(idValue, text, dateTask, priority);
      const tasks = getTasks();
      renderTask(tasks);
      progress();
      closeModal();
    });
  }
}

function closeModal() {
  if (mediaQuery < 1280) {
    console.log('closeModal');
    modal.classList.add('inactive');
    textArea.setAttribute('id','modal__input')
    textArea.placeholder='Add yor new task';
  }
}


function addNewTask() {
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    showOptions();
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
    console.log('verification');
    const actualDate = new Date();
    const actualDateFormatted = actualDate.toISOString().slice(0, 10);
    const dateTaskNumber = Number(dateTask.split('-').join(''));
    const actualDateNumber = Number(actualDateFormatted.split('-').join(''));
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

    const tasks = getTasks();
    const taskExists = tasks.find((task) => task.text === text && task.dateTask === dateTask);
    if (taskExists) {
      attentionDescription.innerText= 'Be careful, you can not add a task with the same text and date';
      attentionDate.innerText= 'Be careful, you can not add a task with the same text and date';
      textArea.id = 'error';
      setTimeout(() => {
        attentionDescription.innerText= '';
        attentionDate.innerText= '';
        textArea.id = 'modal__input';
        date.id = 'modal__input';
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
}


export { openModal };