import { log } from './functions';
import { getTextWidth } from './functions';
import { debounce } from './functions';
// import { _ } from 'lodash';

export const sendData = el => {
  return debounce(event => {
    //
    log('Requesting images of: ' + el.value + '.');
    //
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
