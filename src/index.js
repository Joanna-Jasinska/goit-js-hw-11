// import { log } from './js/functions';
import { inputChange } from './js/inputChange';
import { sendData } from './js/inputChange';
import { debounce } from './js/functions';
import SimpleLightbox from 'simplelightbox';
import { gallery } from './js/displayingGallery';

const input = document.querySelector('.searchInput');
debounce(input.focus.bind(input))(); //showing search bar after a delay
//!!!aaa!!! inputChange should be fixed with proper font parameters
input.addEventListener('input', () => inputChange(input)); //changing input width
input.addEventListener('input', sendData(input)); //sending req to server

const options = {
  captions: true,
  captionsData: 'alt',
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

let galleryDisplay = new SimpleLightbox('.gallery a', options);
// galleryDisplay.on('show.simplelightbox', function () {
//   // Do something…

// });

// galleryDisplay.on('error.simplelightbox', function (e) {
//   console.log(e); // Some usefull information
// });

input.value = 'pink flowers';
sendData(input)();
