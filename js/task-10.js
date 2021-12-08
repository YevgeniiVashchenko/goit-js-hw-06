function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsRef = document.querySelector('#controls');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = (event) => {
  const { value } = event.target;
  const firstItem = document.createElement('div');
  boxesRef.prepend(firstItem);
  console.log(firstItem);
};
controlsRef.addEventListener('input', createBoxes);
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', createBoxes);

const message = 'JavaScript is awesome!';
alert(message);
