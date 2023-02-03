const slides = document.querySelectorAll('#slider01 .slider-slide');
const slidesLength = slides.length - 1;

const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');
const toggleAutoPlayBtn = document.querySelector('[data-playstyle=auto]');
const display = document.querySelector('.slider-slides-display');

let currentImageIndex = 0;
let slideInterval = null;
let isAutoPlaying = true;


const setActiveSlide = (index) => {
    
    slides.forEach( (slide) => {
        slide.classList.remove('active');
    });

    autoPlay(isAutoPlaying);
    
    slides[index].classList.add('active');
    display.textContent = `${index + 1} udaf ${slidesLength + 1}`;
};

const previous = (e) => {

    currentImageIndex = currentImageIndex === 0 ? slidesLength : currentImageIndex -= 1;
    setActiveSlide(currentImageIndex);

    if(e && isAutoPlaying) {
        toggleAutoPlay();
    }
};

const next = (e) => {

    currentImageIndex = currentImageIndex >= slidesLength ? 0 : currentImageIndex += 1;
    setActiveSlide(currentImageIndex);

    if(e && isAutoPlaying) {
        toggleAutoPlay();
    }
};

const setAutoBtnText = (isAutoPlaying) => {
    toggleAutoPlayBtn.textContent = `AutoPlay ${isAutoPlaying ? '(playing)' : '(stopped)' }`;
};

const toggleAutoPlay = () => {

    isAutoPlaying = !isAutoPlaying;
    autoPlay(isAutoPlaying);
    setAutoBtnText(isAutoPlaying);

};

const autoPlay = (playing) => {

    clearInterval(slideInterval);

    if(playing)
    {
        slideInterval = setInterval(next, 2000);   
    }

    isAutoPlaying = playing;
};

if(nextBtn && previousBtn && toggleAutoPlayBtn)
{

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
    toggleAutoPlayBtn.addEventListener('click', toggleAutoPlay);

    
}


// Det vi har brug for når vi starter.
setActiveSlide(currentImageIndex);
setAutoBtnText(isAutoPlaying);



