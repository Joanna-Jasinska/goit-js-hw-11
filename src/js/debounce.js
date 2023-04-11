import { _ } from 'lodash';
// export const log = console.log;

export const debounce = (f, arg) => {
  // if (doNotDebounce) {
  //   if (arg) return () => f(arg);
  //   if (Array.isArray(arg)) return () => f(...arg);
  //   return () => f();
  // }
  const debouncedF = _.debounce(f, DEBOUNCE_DELAY, [
    {
      leading: false,
      trailing: true,
    },
  ]);
  if (!arg) return () => debouncedF();
  if (Array.isArray(arg)) return () => debouncedF(...arg);
  return () => debouncedF(arg);
};

// export const onScroll = () => {
//   return debounce(event => {
//     //
//   });
// };
