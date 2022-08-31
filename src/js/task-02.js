const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

for (let i = 0; i < ingredients.length; i+=1) {
  const elem = ingredients[i];
  
  const liIngridientsEl = document.createElement("li");
  liIngridientsEl.textContent = elem;
  console.log(liIngridientsEl);
  liIngridientsEl.classList.add('item')
  document.getElementById('ingredients').append(liIngridientsEl);
}


