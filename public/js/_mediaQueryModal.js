import { modal } from './vars.js';

function showModal(mediaQuery) {
  if (mediaQuery > 1280) {
    modal.classList.remove('inactive');
  } else {
    modal.classList.add('inactive');
}
}
//show modal if size of window is more than 1280px
window.addEventListener('resize', () => {
  const mediaQuery = window.innerWidth
  console.log(mediaQuery);
  showModal(mediaQuery);

});

export { showModal };