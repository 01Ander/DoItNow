import { input, listOptions, options } from './vars.js';
let optionValue = '';

function showOptions() {
  input.addEventListener('click', () => {
    listOptions.setAttribute('id', 'active');
    options.forEach(option => {
      option.addEventListener('click', () => {
        input.value = option.innerHTML;
        optionValue = input.value;
        listOptions.id='inactive';
      });
    } );
  console.log(optionValue);
  });
}

export { showOptions, optionValue };
