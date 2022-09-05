import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryDiv = document.querySelector(".gallery");

function createItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /></a></div>`;
    })
    .join("");
}

galeryDiv.addEventListener("click", onDivImagesClick);

const itemsMarkup = createItemsMarkup(galleryItems);

galeryDiv.innerHTML = itemsMarkup;

function onDivImagesClick(evt) {
  const isImage = evt.target.classList.contains("gallery__image");

  if (!isImage) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },

      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  // Заборона відкриття по посиланню
  blockAction(evt);
}

function closeModal(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}

function blockAction(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
