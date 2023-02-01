// Her har vi et "sæt"/"række"/array af billede-stier fra vores assets mappe.
// f.eks. http://127.0.0.1:5500/common/assets/squares/product_5.jpg

let images = [
    './assets/squares/product_1.jpg',
    './assets/squares/product_2.jpg',
    './assets/squares/product_3.jpg',
    './assets/squares/product_4.jpg',
    './assets/squares/product_5.jpg',
    './assets/squares/product_6.jpg',
    './assets/squares/product_7.jpg',
    './assets/squares/product_8.jpg',
    './assets/squares/product_9.jpg'
];

const slide = document.querySelector('#slider01 img');
let currentImageIndex = 0;

const setActiveSlide = (index) => {

    slide.src = images[index];
    slide.alt = 'Produkt Index ' + index;

};

const next = () => {

    if(currentImageIndex >= images.length - 1) {

        currentImageIndex = 0;
      
    } else {

        currentImageIndex += 1;

    }

    setActiveSlide(currentImageIndex);
};

const previous = () => {

    if(currentImageIndex === 0) {

        currentImageIndex = images.length - 1;

    } else {

        currentImageIndex -= 1;

    }

    setActiveSlide(currentImageIndex);
};



setActiveSlide(currentImageIndex);



