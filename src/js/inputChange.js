// const axios = require('axios/dist/browser/axios.cjs');
import axios from 'axios';
// import { axios } from 'axios'; ///dist/browser/axios.cjs
// const axios = require('axios');
import { log } from './functions';
import { getTextWidth } from './functions';
import { debounce } from './functions';
import { gallery } from './displayingGallery';
// import { _ } from 'lodash';

log(axios);
const ax = axios.create({
  timeout: 6000,
  // url: '/user',
  method: 'get', // default
  baseURL: '',
  // web,
  // 'https://some-domain.com/api',
  // headers: {'X-Custom-Header': 'foobar'}
});
log(ax);

export const sendData = element => {
  return debounce(event => {
    const req = element.value.trim().replaceAll(' ', '+');
    if (req) {
      const web = 'https://pixabay.com/api';
      const myKey = '/?key=35027326-a21b3e2be23d4febb1cd3f928&q=';
      const searchType = '&image_type=photo';
      const all = web + myKey + req + searchType;
      const fake =
        'https://pixabay.com/api/?key=35027326-a21b3e2be23d4febb1cd3f928&q=cat&image_type=photo';

      // sending data req here
      //https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo

      log('Requesting images of: [' + req + '].');
      log(web + myKey + req + searchType);
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

          console.log(response);
          log(`Status: ${response.status} ${response.statusText}`);
          log(response.data);
          gallery.clear();
          gallery.renderCards(response.data.hits);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

      //
    } else {
      gallery.clear();
    }
  });
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
};
