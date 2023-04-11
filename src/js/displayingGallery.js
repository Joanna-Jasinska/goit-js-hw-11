//handling gallery display
import SimpleLightbox from 'simplelightbox';
import { sendData } from './sendData';

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
//

export const gallery = {
  clear: function () {
    const galleryDiv = document.querySelector('.gallery');
    galleryDiv.innerHTML = '<div class="gallery__filler"></div>';
  },
  renderCard: function (data) {
    // adding one image card
    // data.previewURL data.largeImageURL data.webformatURL
    // style="${style}""
    const markup = `
    <div class="card">
      <a href="${data.largeImageURL}" 
        ><img class="card__img" src="${data.webformatURL}" alt="${data.tags}" title=""
      /></a>
      <div class="card__info">
        <div class="card__info--entry">
          <span class="span--description">Likes</span>
          <span class="likes span--number">${data.likes}</span>
        </div>
        <div class="card__info--entry">
          <span class="span--description">Views</span>
          <span class="views span--number">${data.views}</span>
        </div>
        <div class="card__info--entry">
          <span class="span--description">Comments</span>
          <span class="comments span--number">${data.comments}</span>
        </div>
        <div class="card__info--entry">
          <span class="span--description">Downloads</span>
          <span class="downloads span--number">${data.downloads}</span>
        </div>
      </div>
    </div>`;
    const galleryDiv = document.querySelector('.gallery');
    galleryDiv.innerHTML += markup;
    const links = document.querySelectorAll('.gallery a');
    // const a ??= links[links.length - 1]; //tu nie działa: Uncaught SyntaxError: missing = in const declaration
    // const a = links ? links[links.length - 1] : null;
    const a = links[links.length - 1] || null;
    if (a) {
      a.onclick = e => {
        e.preventDefault();
      };
      // below setting small image + 'loading' as background of 2 images, not needed anymore
      // const img = a.querySelector('img');
      // const existingBgImage = window
      //   .getComputedStyle(img)
      //   .getPropertyValue('background-image');

      // img.setAttribute(
      //   'style',
      //   `background-image: ${existingBgImage}, url(${data.previewURL});`
      // );
    }
  },
  renderCards: function (list) {
    //adding all cards
    for (const card of list) {
      this.renderCard(card);
    }

    galleryDisplay.destroy();
    galleryDisplay = new SimpleLightbox('.gallery a', options);
  },
  loadMore: function () {
    const input = document.querySelector('.searchInput');
    sendData(input.value, { resetSearch: false });
    //
  },

  updatePageCount: function () {
    const pagesDisplay = document.querySelectorAll('.page');
    const maxPagesDisplay = document.querySelectorAll('.maxPages');
    for (let i = 0; i < pagesDisplay.length; i++) {
      pagesDisplay[i].innerHTML = `${lastPage}`;
      maxPagesDisplay[i].innerHTML = `${maxPages}`;
    }
  },
};
