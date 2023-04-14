function modalALert() {
  const modal = document.querySelector('.modal__alert');
  modal.classList.remove('inactive');
  const modalButtonCancel = document.querySelector('.modal__alert-button--cancel');
  modalButtonCancel.addEventListener('click', () => {
    modal.classList.add('inactive');
  });
}

export { modalALert };