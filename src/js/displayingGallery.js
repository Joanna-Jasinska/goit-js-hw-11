import { log } from './functions';
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
    const markup = `
    <div class="card">
      <a href="${data.largeImageURL}"
        ><img class="card__img" src="${data.previewURL}" alt="" title=""
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
      log(`preventing link ${a} from page redirecting`);
      log(a);
      a.onclick = e => {
        e.preventDefault();
      };
    }
  },
  renderCards: function (list) {
    //adding all cards
    for (const card of list) {
      this.renderCard(card);
    }
  },
};
