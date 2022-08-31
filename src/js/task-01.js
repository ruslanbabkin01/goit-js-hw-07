// const oneItem = document.getElementById('categories');
// console.log(oneItem);

const allMenuItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', allMenuItemEl.length);

for (const item of allMenuItemEl) {
   const titleItem = item.firstElementChild.textContent;
   console.log('Category:', titleItem);

   const addClassUl = item.lastElementChild.children;
   console.log('Elements:', addClassUl.length);
}
