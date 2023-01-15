import gallery from './app.js'

const refs = {
    ul: document.querySelector('.js-gallery'),
    lightBox: document.querySelector('.js-lightbox'),
    img: document.querySelector('.js-lightbox__image'),
    button: document.querySelector('.lightbox__button'),
    overlay: document.querySelector('.lightbox__overlay'),
}

refs.ul.addEventListener('click',openModal );
refs.button.addEventListener('click', closeModal);
refs.overlay.addEventListener('click',onOverlayClick)

// /////////////////////////////

// Рендер галереи

function renderGallery(arr){
   
arr.forEach(e => {
const itemRef = `<li class="gallery__item">
<a
  class="gallery__link"
  href="${e.original}"
>
  <img
    class="gallery__image"
    src="${e.preview}"
    data-source="${e.original}"
    alt="${e.description}"
    
  />
</a>
</li>`


refs.ul.insertAdjacentHTML("afterbegin", itemRef);

});

}

renderGallery(gallery);

// Делигирование и открытие модалки



function openModal(event){
    event.preventDefault();

    if(event.target.nodeName !== "IMG"){
        return
    }
    
    const imageRef = event.target;
    const largeUrl = imageRef.dataset.source;

    refs.lightBox.classList.add('is-open');
    refs.img.src = largeUrl;

    window.addEventListener('keydown', onEscapeClick);
}

// закрытие модалки

function closeModal(){
    refs.lightBox.classList.remove('is-open');
    refs.img.src = '';

    window.removeEventListener('keydown', onEscapeClick);
}



// закрытие по оверлею

function onOverlayClick(event){
    if (
        event.target === event.currentTarget
    ){
        closeModal()
    }
}

// закрытие по ESCAPE

function onEscapeClick(event){
    if(event.code === 'Escape'){
        closeModal()
    }   
}





// Функция высшего порядка
button.addEventListener('click', sayHallo); // принимает в качестве аргумента sayHallo

// Функция обратного вызова
function sayHallo(){
    console.log('hello bro');
} 