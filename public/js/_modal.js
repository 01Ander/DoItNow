import { mainButton, modal, modalButtonCancel, textArea } from './vars.js';

mainButton.addEventListener('click', openModal);
modalButtonCancel.addEventListener('click', closeModal);

function openModal() {
  console.log('openModal');
  modal.classList.remove('inactive');
  textArea.value = '';
  textArea.setAttribute('id','modal__input')
  textArea.placeholder='Add yor new task';
}

function closeModal() {
  console.log('closeModal');
  modal.classList.add('inactive');
  textArea.setAttribute('id','modal__input')
  textArea.placeholder='Add yor new task';
}