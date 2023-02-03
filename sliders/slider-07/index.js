const slidesContainer = document.querySelector('#slider01 .slider-slides');

const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');
const toggleAutoPlayBtn = document.querySelector('[data-playstyle=auto]');
const animationInput = document.querySelector('[name=animationForm]');
const display = document.querySelector('.slider-slides-display');

let slides = null;
let currentImageIndex = 0;
let slideInterval = null;
let isAutoPlaying = false;
let slidesLength = 0;

const init = (data) => {
  
    data.forEach((slideData) => {

        slidesContainer.insertAdjacentHTML('beforeend', slideTmpl(slideData));

    });

    slides = document.querySelectorAll('#slider01 .slider-slide');
    slidesLength = data.length - 1;

    setActiveSlide(currentImageIndex);
    setAutoBtnText(isAutoPlaying);
    
};

const slideTmpl = (slideData) => `<div class="slider-slide">
    <div class="slider-slide-content">${slideData.description}</div>
    <img src="${slideData.media.image}" alt="${slideData.media.text}"/>
</div>`;

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

const changeAnimation = (e) => {

    e.preventDefault();

    const {name} = e.target.elements;

    let sliderSlides = document.querySelectorAll('.slider-slide');
    sliderSlides.forEach((s) => s.style.animationName = name.value)

}

if(nextBtn && previousBtn && toggleAutoPlayBtn && animationInput)
{

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
    toggleAutoPlayBtn.addEventListener('click', toggleAutoPlay);
    animationInput.addEventListener('submit', changeAnimation);

    
}


/* 

    Dette er hvad vi har brug for at starte.

    Jeg har flyttet vores data array herned for at gøre det tydeligt, at vi fodre init med data, normalt vil jeg placere 
    arrayet for oven.

*/

let data = [
    {
        'description' : 'Produkt 1 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 1',
            'image' : '../../assets/squares/product_1.jpg'
        }
    },
    {
        'description' : 'Produkt 2 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 2',
            'image' : '../../assets/squares/product_2.jpg'
        }
    },
    {
        'description' : 'Produkt 3 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 3',
            'image' : '../../assets/squares/product_3.jpg'
        }
    },
    {
        'description' : 'Produkt 4 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 4',
            'image' : '../../assets/squares/product_4.jpg'
        }
    },
    {
        'description' : 'Produkt 5 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 5',
            'image' : '../../assets/squares/product_5.jpg'
        }
    },
    {
        'description' : 'Produkt 6 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 6',
            'image' : '../../assets/squares/product_6.jpg'
        }
    },
    {
        'description' : 'Produkt 7 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 7',
            'image' : '../../assets/squares/product_7.jpg'
        }
    },
    {
        'description' : 'Produkt 8 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 8',
            'image' : '../../assets/squares/product_8.jpg'
        }
    },
    {
        'description' : 'Produkt 9 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 9',
            'image' : '../../assets/squares/product_9.jpg'
        }
    }
];

init(data);




