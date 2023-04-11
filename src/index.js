// import SimpleLightbox from 'simplelightbox';
import { gallery } from './js/displayingGallery';
import { inputChange } from './js/inputChange';
import { sendData } from './js/sendData';
import { debounce } from './js/debounce'; //debounce, getTextWidth

const input = document.querySelector('.searchInput');
const inputDuplicate = document.querySelector('.inputToRedirect');
input.addEventListener('input', () => inputChange(input)); //changing input width
// input.addEventListener('input', debounce(sendData, input.value)); //sending req to server

inputDuplicate.addEventListener('focus', e => {
  e.preventDefault();
  inputDuplicate.blur();
  debounce(input.focus.bind(input))(); //showing search bar after a delay
});

const searchCounter = document.querySelector('.searchCounter');
searchCounter.addEventListener('submit', e => {
  e.preventDefault();
  sendData(input.value);
  const searchBtn = document.querySelector('.searchBtn');
  searchBtn.blur();
}); //starting new search

const loadMoreBtn = document.querySelector('.loadMoreBtn');
loadMoreBtn.addEventListener('click', () => {
  gallery.loadMore();
  loadMoreBtn.blur();
}); //sending req to server

// galleryDisplay.on('show.simplelightbox', function () {
// });

// galleryDisplay.on('error.simplelightbox', function (e) {
// });

document.addEventListener('DOMContentLoaded', () => {
  debounce(input.focus.bind(input))(); //showing search bar after a delay
});
input.value = 'pink flowers';
inputDuplicate.value = 'pink flowers';
// debounce(sendData, [input.value, { resetSearch: true }])(); //getting images debounced
sendData(input.value); //getting images right away instead of in debounced time
