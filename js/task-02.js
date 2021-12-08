const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

ingredients.map((element) => {
  const itemAdd = document.createElement('li');
  itemAdd.textContent = element;
  itemAdd.classList.add('item');
  console.log(itemAdd);

  ingredientsRef.append(itemAdd);
});
