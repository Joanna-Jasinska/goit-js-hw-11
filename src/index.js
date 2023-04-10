// import SimpleLightbox from 'simplelightbox';
import { gallery } from './js/displayingGallery';
import { inputChange, sendData } from './js/inputChange';
import { inputShow } from './js/functions';

const input = document.querySelector('.searchInput');
const inputDuplicate = document.querySelector('.inputToRedirect');
//!!!aaa!!! inputChange should be fixed with proper font parameters
input.addEventListener('input', () => inputChange(input)); //changing input width
// input.addEventListener('input', sendData(input)); //sending req to server
inputDuplicate.addEventListener('focus', e => {
  e.preventDefault();
  inputDuplicate.blur();
  inputShow();
});

// const input = document.querySelector('.searchInput');
const searchCounter = document.querySelector('.searchCounter');
searchCounter.addEventListener('submit', e => {
  e.preventDefault();
  sendData(input, { resetSearch: true, doNotDebounce: true })();
  const searchBtn = document.querySelector('.searchBtn');
  searchBtn.blur();
}); //starting new search

const loadMoreBtn = document.querySelector('.loadMoreBtn');
loadMoreBtn.addEventListener('click', gallery.loadMore); //sending req to server

// galleryDisplay.on('show.simplelightbox', function () {
// });

// galleryDisplay.on('error.simplelightbox', function (e) {
// });

document.addEventListener('DOMContentLoaded', () => {
  inputShow(); //showing search bar after a delay
});
input.value = 'pink flowers';
inputDuplicate.value = 'pink flowers';
sendData(input, { resetSearch: false, doNotDebounce: true })(); //getting images right away instead of in debounced time
