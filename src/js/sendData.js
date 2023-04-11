//sending request and handling data/response from server
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchPictures } from './fetchPictures';
import { gallery } from './displayingGallery';

Notify.init({ showOnlyTheLastOne: true });

export const sendData = async (
  txt,
  { resetSearch } = { resetSearch: true }
) => {
  // element.value
  const req = txt.trim().replaceAll(' ', '+');
  if (req) {
    if (resetSearch) {
      lastPage = 0;
    }
    lastPage++;
    try {
      const response = await fetchPictures(req);
      // .then(function (response) {
      // handle success
      maxPages = parseInt(Math.ceil(response.data.totalHits / IMAGES_PER_PAGE));
      if (resetSearch) {
        gallery.clear();
      }
      const loadMoreBtn = document.querySelector('.loadMoreBtn');
      const footerContent = document.querySelector('.footer__content');
      const header = document.querySelector('.header');
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
      gallery.updatePageCount();
      if (!Array.isArray(response.data.hits) || response.data.hits.length < 1) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      gallery.renderCards(response.data.hits);
    } catch (error) {
      Notify.failure(
        'Oops, something went wrong communicating with the server.. Please try again later.'
      );
      console.log(error);
    } finally {
      // always executed
    }
  } else {
    gallery.clear();
  }
};
