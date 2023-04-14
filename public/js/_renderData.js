import { checkedTask, getTasks } from './_localStorage.js';
import { configureIconDelete } from './_icon-delete.js';
import { list } from './vars.js';
import { deleteTask } from './_localStorage.js';
import { modalALert } from './_modalAlert.js';

function renderTask() {
  const tasks = getTasks();
  list.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('main__item');
    li.innerHTML = `
    <div class="checkbox-container">
      <input type="checkbox" class="main__item-checkbox">
      <span class="checkbox-hover"></span>
    </div>
    <p class="main__item-text">${task.text}</p>
    <div class="icon-delete__container">
      <span class="main__item-icon-delete"></span>
    </div>
    `;
    list.appendChild(li);

    const deleteTaskIcon = li.querySelector('.main__item-icon-delete');
    deleteTaskIcon.addEventListener('click', () => {
      console.log('delete');
      deleteTask(task.id);
      renderTask();
    });

    const checkbox = li.querySelector('.main__item-checkbox');
    checkbox.addEventListener('change', () => {
      const p = checkbox.parentNode.nextElementSibling;
      if (checkbox.checked) {
        console.log('checked');
        p.classList.add('checked');
        checkedTask(task.id);
      } else {
        console.log('unchecked');
        p.classList.remove('checked');
        checkedTask(task.id);
      }
    } );

    if (task.done) {
      const p = checkbox.parentNode.nextElementSibling;
      p.classList.add('checked');
      checkbox.checked = true;
    }

  });
  configureIconDelete();
}

export { renderTask };