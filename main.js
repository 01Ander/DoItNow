import { configureIconDelete } from './public/js/_icon-delete';
import './public/sass/_style.sass'


function initApp() {
  console.log('App loaded');
  configureIconDelete();
}

//listener for loading dom
document.addEventListener('DOMContentLoaded', initApp());