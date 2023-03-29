// import { log } from './js/functions';
import { inputChange } from './js/inputChange';
import { sendData } from './js/inputChange';
import { debounce } from './js/functions';

const input = document.querySelector('.searchInput');
debounce(input.focus.bind(input))(); //showing search bar after a delay
//!!!aaa!!! inputChange should be fixed with proper font parameters
input.addEventListener('input', () => inputChange(input)); //changing input width
//!!!aaa!!! nothing is send to server
input.addEventListener('input', sendData(input)); //sending req to server
