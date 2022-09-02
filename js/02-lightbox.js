import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryDiv = document.querySelector(".gallery");

const itemsMarkup = createItemsMarkup(galleryItems);

galeryDiv.innerHTML = itemsMarkup;

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
