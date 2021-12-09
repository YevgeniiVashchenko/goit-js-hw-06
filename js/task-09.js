function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const showColorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  showColorSpan.textContent = color;
});
