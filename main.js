import { configureIconDelete } from './public/js/_icon-delete';
import { configureIconPlus } from './public/js/_icon-plus';
import './public/js/_modal';
import './public/sass/_style.sass'


function initApp() {
  console.log('App loaded');
  configureIconDelete();
  configureIconPlus();
}

document.addEventListener('DOMContentLoaded', initApp());