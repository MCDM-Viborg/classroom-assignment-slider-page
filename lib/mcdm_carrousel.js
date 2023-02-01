const slides = document.querySelectorAll('#slider01 .slider-slide');
const slidesLength = slides.length - 1;

const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');

let currentImageIndex = 0;
let slideInterval = null;

const setActiveSlide = (index) => {
    
    slides.forEach( (slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');

};

const previous = () => {

    currentImageIndex = currentImageIndex === 0 ? slidesLength : currentImageIndex -= 1;
    setActiveSlide(currentImageIndex);

};

const next = () => {

    currentImageIndex = currentImageIndex >= slidesLength ? 0 : currentImageIndex += 1;
    setActiveSlide(currentImageIndex);

};

if(nextBtn && previousBtn)
{

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);

}

/* Her starter vi maskineriet. */
setActiveSlide(currentImageIndex);



