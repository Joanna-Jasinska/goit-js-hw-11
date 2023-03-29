export const log = console.log;
import { _ } from 'lodash';

// function auto_grow(element) {
//   element.style.height = '25px';
//   element.style.height = element.scrollHeight + 3 + 'px';
// }

export const debounce = (f, arg) => {
  // log('init debouncing: ' + f + '----(' + arg + ')');
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
