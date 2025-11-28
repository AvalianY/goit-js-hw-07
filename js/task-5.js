function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const spanColor = body.querySelector('.color');
const changeColorButton = body.querySelector('.change-color');

changeColorButton.addEventListener('click', event => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor.toString();
});