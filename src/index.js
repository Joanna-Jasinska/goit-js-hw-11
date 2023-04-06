// import { log } from './js/functions';
import { inputChange } from './js/inputChange';
import { sendData } from './js/inputChange';
import { debounce, inputShow } from './js/functions';
// import SimpleLightbox from 'simplelightbox';
import { gallery } from './js/displayingGallery';

const input = document.querySelector('.searchInput');
const inputDuplicate = document.querySelector('.inputToRedirect');
//!!!aaa!!! inputChange should be fixed with proper font parameters
input.addEventListener('input', () => inputChange(input)); //changing input width
input.addEventListener('input', sendData(input)); //sending req to server
inputDuplicate.addEventListener('focus', e => {
  e.preventDefault();
  inputDuplicate.blur();
  inputShow();
});

const loadMoreBtn = document.querySelector('.loadMoreBtn');
loadMoreBtn.addEventListener('click', gallery.loadMore); //sending req to server

// galleryDisplay.on('show.simplelightbox', function () {
//   // Do something…

// });

// galleryDisplay.on('error.simplelightbox', function (e) {
//   console.log(e); // Some usefull information
// });

document.addEventListener('DOMContentLoaded', () => {
  inputShow(); //showing search bar after a delay
});
input.value = 'pink flowers';
inputDuplicate.value = 'pink flowers';
sendData(input, true)(); //true = getting images right away instead of in debounced time
