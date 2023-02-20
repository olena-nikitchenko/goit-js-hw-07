import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const containerImages = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);
containerImages.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"

         /></a>
</div>`;
        })
        .join('');
}

const instance = basicLightbox.create(`<img src="" width = "1280" >`, {
    onShow: instance => window.addEventListener('keydown', onEscapeKeyPress),
    onClose: instance => window.removeEventListener('keydown', onEscapeKeyPress),
});
containerImages.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.dataset.source) {
        return;
    } else {
        const elem = instance.element().querySelector('img');
        elem.src = event.target.dataset.source;
        instance.show();
    }
}

function onEscapeKeyPress(event) {
    if (event.code !== 'Escape') {
        console.log(event.code);
        return;
    } else {
        console.log(event.code);
        instance.close();
    }
}
