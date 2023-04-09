import axios from 'axios';
import { log } from './functions';
import { getTextWidth } from './functions';
import { debounce } from './functions';
import { gallery } from './displayingGallery';
// import { _ } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({ showOnlyTheLastOne: true });

const ax = axios.create({
  timeout: 6000,
  // url: '/user',
  method: 'get', // default
  baseURL: '',
  // web,
  // 'https://some-domain.com/api',
  // headers: {'X-Custom-Header': 'foobar'}
});

const updatePageCount = () => {
  const pagesDisplay = document.querySelectorAll('.page');
  const maxPagesDisplay = document.querySelectorAll('.maxPages');
  for (let i = 0; i < pagesDisplay.length; i++) {
    pagesDisplay[i].innerHTML = `${lastPage}`;
    maxPagesDisplay[i].innerHTML = `${maxPages}`;
  }
};

export const sendData = (
  element,
  { resetSearch, doNotDebounce } = { resetSearch: true, doNotDebounce: false }
) => {
  return debounce(
    event => {
      const req = element.value.trim().replaceAll(' ', '+');
      if (req) {
        if (resetSearch) {
          lastPage = 0;
        }
        lastPage++;
        const web = 'https://pixabay.com/api';
        const myKey = '/?key=35027326-a21b3e2be23d4febb1cd3f928&q=';
        let pagination = `&page=${lastPage}&per_page=${IMAGES_PER_PAGE}`;
        const searchType =
          '&image_type=photo&orientation=horizontal&safesearch=true';
        if (resetSearch) {
          //
        }
        const all = web + myKey + req + searchType + pagination;
        const fake =
          'https://pixabay.com/api/?key=35027326-a21b3e2be23d4febb1cd3f928&q=cat&image_type=photo&page=2&per_page=30';

        // log('Requesting images of: [' + req + '].');
        // log(web + myKey + req + searchType + pagination);
        //
        axios
          .get(`${all}`, {
            params: {
              // url: '/user',
              method: 'get', // default
              baseURL: web,
              // 'https://some-domain.com/api',
            },
          })
          .then(function (response) {
            // handle success

            // console.log(response);
            maxPages = parseInt(
              Math.ceil(response.data.totalHits / IMAGES_PER_PAGE)
            );
            if (resetSearch) {
              gallery.clear();
            }
            const loadMoreBtn = document.querySelector('.loadMoreBtn');
            const footerContent = document.querySelector('.footer__content');
            const header = document.querySelector('.header');
            log(header);
            if (lastPage * IMAGES_PER_PAGE >= response.data.totalHits) {
              loadMoreBtn.classList.add('hide');
              footerContent.classList.add('hide');
              header.classList.add('alwaysShow');
              Notify.info(
                "We're sorry, but you've reached the end of search results."
              );
            } else {
              if (loadMoreBtn.classList.contains('hide')) {
                loadMoreBtn.classList.remove('hide');
                footerContent.classList.remove('hide');
                header.classList.remove('alwaysShow');
              }
            }
            updatePageCount();
            if (
              !Array.isArray(response.data.hits) ||
              response.data.hits.length < 1
            ) {
              Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.'
              );
            }
            gallery.renderCards(response.data.hits);
          })
          .catch(function (error) {
            // handle error
            Notify.failure(
              'Oops, something went wrong communicating with the server.. Please try again later.'
            );
            console.log(error);
          })
          .finally(function () {
            // always executed
          });

        //
      } else {
        gallery.clear();
      }
    },
    null,
    doNotDebounce
  );
};

export const inputChange = el => {
  let textWidth = Math.max(
    inputMinWidth,
    Math.min(
      inputMaxWidth,
      parseInt(getTextWidth(el.value, 'bold 12pt arial') + 4)
    )
  );
  el.style.width = textWidth + 'px';
  const inputDuplicate = document.querySelector('.inputToRedirect');
  inputDuplicate.value = el.value;
  inputDuplicate.style.width = textWidth + 'px';
};
