import { showOptions } from './_form.js';
import { mainButton, modal, modalButtonCancel, priorityInput, textArea } from './vars.js';

mainButton.addEventListener('click', openModal);
modalButtonCancel.addEventListener('click', closeModal);

const mediaQuery = window.innerWidth

function openModal() {
  modal.classList.remove('inactive');
  console.log('openModal');
  textArea.value = '';
  date.value = '';
  priorityInput.value = '';
  textArea.setAttribute('id','modal__input')
  textArea.placeholder='Add yor new task';
  showOptions();

}

function closeModal() {
  if (mediaQuery < 1280) {
    console.log('closeModal');
    modal.classList.add('inactive');
    textArea.setAttribute('id','modal__input')
    textArea.placeholder='Add yor new task';
  }
}