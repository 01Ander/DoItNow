import { mainButton, modal, modalButtonCancel } from './vars.js';

mainButton.addEventListener('click', openModal);
modalButtonCancel.addEventListener('click', closeModal);

function openModal() {
  console.log('openModal');
  modal.classList.remove('inactive');
}

function closeModal() {
  console.log('closeModal');
  modal.classList.add('inactive');
}