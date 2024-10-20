const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const   ingredientsList = document.querySelector("#ingredients");
let     newListItems = [];
let     i = 0;

ingredients.map((element) => { 
  
  newListItems[i] = document.createElement('li'); // <li></li>

  newListItems[i].textContent = element;

  newListItems[i].classList.add('item');
  
  i++;

})

ingredientsList.append(...newListItems)
