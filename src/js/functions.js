export const log = console.log;
import { _ } from 'lodash';

// function auto_grow(element) {
//   element.style.height = '25px';
//   element.style.height = element.scrollHeight + 3 + 'px';
// }

export const debounce = (f, arg, doNotDebounce = false) => {
  // log('init debouncing: ' + f + '----(' + arg + ')');
  if (doNotDebounce) {
    if (arg) return () => f(arg);
    if (Array.isArray(arg)) return () => f(...arg);
    return () => f();
  }
  const debouncedF = _.debounce(f, DEBOUNCE_DELAY, [
    {
      leading: false,
      trailing: true,
    },
  ]);
  if (arg) return () => debouncedF();
  if (Array.isArray(arg)) return () => debouncedF(...arg);
  return () => debouncedF(arg);
};

export const getTextWidth = (text, font) => {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

export const inputShow = () => {
  const input = document.querySelector('.searchInput');
  return debounce(input.focus.bind(input))(); //showing search bar after a delay
  //
};

export const onScroll = () => {
  return debounce(event => {
    //
  });
};
