// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery')
const imageMarkup = galleryItems.map(({ preview, original, description }) =>
  `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      onclick="return false;"
    />
  </a>`).join('')
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup)

new SimpleLightbox('.gallery a')

