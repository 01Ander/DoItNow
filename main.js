import { configureIconDelete } from './public/js/_icon-delete';
import { configureIconPlus } from './public/js/_icon-plus';
import { renderTask } from './public/js/_renderData';
import './public/js/_modal';
import './public/js/_check';
import './public/js/_localStorage';
import './public/sass/_style.sass'



function initApp() {
  configureIconPlus();
  renderTask();

}

document.addEventListener('DOMContentLoaded', initApp());