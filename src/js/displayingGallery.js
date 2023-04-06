import { log } from './functions';
import SimpleLightbox from 'simplelightbox';
import { debounce } from './functions';

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
    galleryDiv.innerHTML = '';
    log('gallery cleared.');
  },
  renderCard: function (data) {
    // adding one image card
    log(`Rendering card, ID: ${data.id}`);
    // data.previewURL data.largeImageURL
    // background-image: url('${data.previewURL}');
    // const style = `background-image: url(./images/loading.png), url('${data.previewURL}');
    // background-position: top right, center;
    // background-repeat: no-repeat, repeat;
    // background-size: 80px 80px, cover;`;
    // /__parcel_source_root/src/images/loading.svg
    // const style = `background-image: url('./images/loading.svg');`;
    // style="${style}""
    const markup = `
    <div class="card">
      <a href="${data.largeImageURL}" 
        ><img class="card__img" src="${data.largeImageURL}" alt="" title=""
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
    const a = links ? links[links.length - 1] : null;
    if (a) {
      // log(`preventing link ${a} from page redirecting`);
      // log(a);
      a.onclick = e => {
        e.preventDefault();
      };
      const img = a.querySelector('img');
      const existingBgImage = window
        .getComputedStyle(img)
        .getPropertyValue('background-image');

      img.setAttribute(
        'style',
        `background-image: ${existingBgImage}, url(${data.previewURL});`
      );
      // img.style.backgroundImage = `${img.style.backgroundImage}, url(${data.previewURL})`;
      // log(img);
      // const style = `background-image: url('./images/loading.svg');`;
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
    log('loading more');
    //
  },
};
