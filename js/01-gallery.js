import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
const galleryMarkupHTML = createGalleryItems(galleryItems);
console.log(galleryMarkupHTML);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkupHTML);

galleryContainer.addEventListener("click", onImageClick);

const instance = basicLightbox.create(
  ``,
  {
    onShow: (instance) => {
      galleryContainer.addEventListener("keydown", onEscapeKeydown);
    },
    onClose: (instance) => {
      galleryContainer.removeEventListener("keydown", onEscapeKeydown);
    },
  }
);

function onImageClick(evt) {

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const el = instance.element().insertAdjacentHTML('beforeend',`
  <img src="${evt.target.dataset.source}" width='800' heigth='600'>
  `)
  evt.preventDefault();
 
  instance.show();
}


function onEscapeKeydown(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

function createGalleryItems(galleryItems) {
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
    />
  </a>
</div>
    `;
    })
    .join("");
}
