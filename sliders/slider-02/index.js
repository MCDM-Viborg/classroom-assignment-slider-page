let images = [
    '../../assets/squares/product_1.jpg',
    '../../assets/squares/product_2.jpg',
    '../../assets/squares/product_3.jpg',
    '../../assets/squares/product_4.jpg',
    '../../assets/squares/product_5.jpg',
    '../../assets/squares/product_6.jpg',
    '../../assets/squares/product_7.jpg',
    '../../assets/squares/product_8.jpg',
    '../../assets/squares/product_9.jpg'
];

const slide = document.querySelector('#slider01 .slider-slide');
const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');

let currentImageIndex = 0;

const setActiveSlide = (index) => {
    
    slide.src = images[index];
    slide.alt = 'Produkt Index ' + index;

};

const previous = () => {

    currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex -= 1;
    setActiveSlide(currentImageIndex);

};

const next = () => {

    currentImageIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex += 1;
    setActiveSlide(currentImageIndex);

};

// Sætter knapper op. Hvis de to elementer findes. Så tilføjer vi 'Click' event-listeners.
if(nextBtn && previousBtn)
{
    
    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
}


setActiveSlide(currentImageIndex);



