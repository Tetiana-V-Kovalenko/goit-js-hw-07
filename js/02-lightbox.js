import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkupHTML = createGalleryItems (galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkupHTML);

galleryContainer.addEventListener('click', onImageClick)



function onImageClick(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG'){
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
}


function createGalleryItems (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
         return `
         <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
       </a>
     `
     }).join('');
     
 }