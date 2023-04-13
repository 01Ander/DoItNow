import iconDeleteSvg from '../assets/icons/delete.svg';
import {iconDelete} from './vars';

function configureIconDelete() {
    iconDelete.forEach((icon) => {
        icon.style.backgroundImage = `url(${iconDeleteSvg})`;
    });
}

export {configureIconDelete};