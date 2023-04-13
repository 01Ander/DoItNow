import { configureIconDelete } from './public/js/_icon-delete';
import { configureIconPlus } from './public/js/_icon-plus';
import './public/sass/_style.sass'


function initApp() {
  console.log('App loaded');
  configureIconDelete();
  configureIconPlus();
}

//listener for loading dom
document.addEventListener('DOMContentLoaded', initApp());