import { showOptions } from './_form.js';
import { modal, modalButtonCancel } from './vars.js';

window.addEventListener('resize', () => {
  const mediaQuery = window.innerWidth
  showModal(mediaQuery);
});

function showModal(mediaQuery) {
  if (mediaQuery > 1280) {
    modal.classList.remove('inactive');
    modalButtonCancel.id='inactive';
    showOptions();
  } else if(mediaQuery < 1280) {
    modal.classList.add('inactive');
    modalButtonCancel.id='active';
  }
}

function closeModal() {
  const mediaQuery = window.innerWidth
  if (mediaQuery < 1280) {
    modal.classList.add('inactive');
    modalButtonCancel.id='active';
  }
}

export { showModal, closeModal };