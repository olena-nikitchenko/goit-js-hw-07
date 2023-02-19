import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const containerImages = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);
containerImages.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
        })
        .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 500,
});
