// dedicated to update text of both inputs and their width

const getTextWidth = (text, font) => {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
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
  const inputDuplicate = document.querySelector('.inputToRedirect');
  inputDuplicate.value = el.value;
  inputDuplicate.style.width = textWidth + 'px';
};

// function auto_grow(element) {
//   element.style.height = '25px';
//   element.style.height = element.scrollHeight + 3 + 'px';
// }
