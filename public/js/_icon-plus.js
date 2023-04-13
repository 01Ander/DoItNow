import iconPlusSvg from '../assets/icons/plus.svg';
import {iconPlus} from './vars';

function configureIconPlus() {
  iconPlus.style.backgroundImage = `url(${iconPlusSvg})`;
}

export {configureIconPlus};