import iconDeleteSvg from '../assets/icons/delete.svg';

function configureIconDelete() {
    const iconDelete = document.querySelectorAll('.main__item-icon-delete');
    iconDelete.forEach((icon) => {
        icon.style.backgroundImage = `url(${iconDeleteSvg})`;
    });
}

export {configureIconDelete};