import { configureIconPlus } from './public/js/_icon-plus';
import { renderTask } from './public/js/_renderData';
import { progress } from './public/js/_progress';
import './public/js/_modal';
import './public/js/_check';
import './public/js/_localStorage';
import './public/js/_search';
import './public/sass/_style.sass'
import { getTasks } from './public/js/_localStorage';



function initApp() {
  configureIconPlus();
  const tasks = getTasks();
  renderTask(tasks);
  progress();
}

document.addEventListener('DOMContentLoaded', initApp());