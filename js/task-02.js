const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map((element) => {
  const itemAdd = document.createElement('li');
  itemAdd.textContent = element;
  itemAdd.classList.add('item');
  return itemAdd;
});
ingredientsRef.append(...elements);
