import { mainButton, modal, modalButtonCancel, textArea } from './vars.js';

mainButton.addEventListener('click', openModal);
modalButtonCancel.addEventListener('click', closeModal);

function openModal() {
  console.log('openModal');
  modal.classList.remove('inactive');
  textArea.value = '';
}

function closeModal() {
  console.log('closeModal');
  modal.classList.add('inactive');
}