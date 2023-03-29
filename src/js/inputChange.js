import { log } from './functions';
import { getTextWidth } from './functions';
import { debounce } from './functions';
import { gallery } from './displayingGallery';
// import { _ } from 'lodash';

export const sendData = element => {
  return debounce(event => {
    const req = element.value.trim();
    if (req) {
      //

      log('Requesting images of: [' + req + '].');

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
