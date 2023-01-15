import images from "./images.js";

const refs = {
    ul: document.querySelector('.js-gallery'),
    lightbox:document.querySelector('.js-lightbox'),
    img:document.querySelector('.lightbox__image'),
    button:document.querySelector('.lightbox__button'),
    overlay:document.querySelector('.lightbox__overlay'),
}

// 

refs.ul.addEventListener('click', openModal);
refs.button.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', onOverlayClick );

// рендер галлереи

function createGallery(arr){
  arr.forEach(e =>{
    const itemRef = `<li class="gallery__item">
    <a class="gallery__link" href="${e.original}" >
      <img src="${e.preview}" alt="${e.description}"  data-source="${e.original}" class="gallery__image">
    </a>
   </li>`

   refs.ul.insertAdjacentHTML("afterbegin",itemRef);
})
}

createGallery(images);

//  делегирование  и открытие модалки

function openModal(e){
  e.preventDefault();
  
  if(e.target.nodeName !== 'IMG'){
    return
  }

  refs.lightbox.classList.add('is-open');
  refs.img.src = e.target.dataset.source;

  window.addEventListener('keydown' , onEscClick);
}

function closeModal(){
  refs.img.src = '';
  refs.lightbox.classList.remove('is-open');

  window.removeEventListener('keydown' , onEscClick);
}

// клик по оверлею

function onOverlayClick(e){
 if(e.target === e.currentTarget){
  closeModal();
 }
}

// клик по escape

function onEscClick(e){
  if(e.code === 'Escape'){
    closeModal()
}

}