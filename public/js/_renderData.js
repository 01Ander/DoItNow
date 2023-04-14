import { checkedTask } from './_localStorage.js';
import { configureIconDelete } from './_icon-delete.js';
import { list } from './vars.js';
import { deleteTask } from './_localStorage.js';
import { progress } from './_progress.js';


function renderTask(tasks) {
  list.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.add('main__item');
    li.innerHTML = `
    <div class="checkbox-container">
      <input type="checkbox" class="main__item-checkbox">
      <span class="checkbox-hover"></span>
    </div>
    <div class="data-container">
      <div class="text-container">
        <p class="main__item-priority ${task.priority} decoration">${task.priority}</p>
        <p class="main__item-text">${task.text}</p>
      </div>
      <p class="main__item-date">${task.dateTask}</p>
    </div>
    <div class="icon-delete__container">
      <span class="main__item-icon-delete"></span>
    </div>
    `;
    list.appendChild(li);

    const deleteTaskIcon = li.querySelector('.main__item-icon-delete');
    deleteTaskIcon.addEventListener('click', () => {
      deleteTask(task.id);
      progress();
    });

    const checkbox = li.querySelector('.main__item-checkbox');
    checkbox.addEventListener('change', () => {
      const p = checkbox.parentNode.nextElementSibling;
      if (checkbox.checked) {
        p.classList.add('checked');
        checkedTask(task.id);
      } else {
        p.classList.remove('checked');
        checkedTask(task.id);
      }
      progress();
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