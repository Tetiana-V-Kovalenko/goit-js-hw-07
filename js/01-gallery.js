import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);
const galleryMarkupHTML = createGalleryItems (galleryItems);
console.log(galleryMarkupHTML);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkupHTML);

galleryContainer.addEventListener('click', onImageClick)


function onImageClick(evt){

if (evt.target.nodeName !== 'IMG'){
    return;
}

 evt.preventDefault();
const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}" >
`)

instance.show()

galleryContainer.addEventListener('keydown', (evt) => {
    if(evt.code === 'Escape'){
        instance.close()
    }
})

}



function createGalleryItems (galleryItems) {
   return galleryItems.map(({preview, original, description}) => {
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
    `
    }).join('');
    
}



