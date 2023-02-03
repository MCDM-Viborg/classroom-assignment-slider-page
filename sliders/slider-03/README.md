# Opgave 3.

Her i Opgave 3 ændre vi fra, at have vores billeder i et array i `JavaScript Filen` men i stedet have dem skrevet direkte i html dokumentet.

Det betyder at vi i denne opgave.

1. Vil ændre måden vi finder ud af hvor mange billeder der findes.
2. Ændre måden vi aktivere et billede, nu kan **ikke** længere "bare" sætte en ``src`` attribut, nu skal vi gøre billederne synlige eller ikke synlige.

Når du åbner ``opgave_03.html`` vil du bemærke at alle billeder er synlige, i én lang række. Det er meningen, lige nu. Gør browser vinduet smalt, så du kan se næsten alle billeder og knapperne. (brug consollen)

Vi starter it ``opgave_03.html``, vi har nu sat alle billede elementer ind.

```html 
    <img class="slider-slide" src="/common/assets/squares/product_1.jpg"  alt="Produkt 1"/>
    <img class="slider-slide" src="/common/assets/squares/product_2.jpg"  alt="Produkt 2"/>
    <img class="slider-slide" src="/common/assets/squares/product_3.jpg"  alt="Produkt 3"/>
    <img class="slider-slide" src="/common/assets/squares/product_4.jpg"  alt="Produkt 4"/>
    <img class="slider-slide" src="/common/assets/squares/product_5.jpg"  alt="Produkt 5"/>
    <img class="slider-slide" src="/common/assets/squares/product_6.jpg"  alt="Produkt 6"/>
    <img class="slider-slide" src="/common/assets/squares/product_7.jpg"  alt="Produkt 7"/>
    <img class="slider-slide" src="/common/assets/squares/product_8.jpg"  alt="Produkt 8"/>
    <img class="slider-slide" src="/common/assets/squares/product_9.jpg"  alt="Produkt 9"/>
```

Så derfor starter vi med at få styr på vores data.

1. Vi skal vide hvor mange billeder der er, så vi kan gå frem og tilbage i vores index.

Og i ``opgave_03.js`` har vi ikke længere et images array.

**MEN!**            
Vi har ændret en væsentlig lille detalje.

```JavaScript
const slide = document.querySelector('#slider01 .slider-slide');
```
er blevet til:

```JavaScript
const slides = document.querySelectorAll('#slider01 .slider-slide');
```

Nu vælger vi ikke længere ét slide element i html´en, men **ALLE** slide elementer. Kig godt på de to ovenfor, og spot forskellen. Der er TO!

Vores ``slides`` (*flertal*) variable, indeholder nu et ``array`` af Html-Nodes (`querySelectorAll`), altså `Html-Elmenter` Så i vores tilfælde ville array´et se sådan ud, hvis vi skulle skrive det i .JS filen. Som vi gjorde i de tidligere opgaver.

```JavaScript
let images = [
    `<img class="slider-slide" src="/common/assets/squares/product_1.jpg"  alt="Produkt 1"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_2.jpg"  alt="Produkt 2"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_3.jpg"  alt="Produkt 3"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_4.jpg"  alt="Produkt 4"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_5.jpg"  alt="Produkt 5"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_6.jpg"  alt="Produkt 6"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_7.jpg"  alt="Produkt 7"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_8.jpg"  alt="Produkt 8"/>`,
    `<img class="slider-slide" src="/common/assets/squares/product_9.jpg"  alt="Produkt 9"/>`
]
```

Og nu skal vi bruge antallet af elementer/slides, til vores index maskine. Og da vi har med et `array` at gøre, så kan vi spørge om længden.

Det gør vi nu, ved at vi opretter en ``slidesLength`` variabel og sætter den lig med længende af vores ``slides`` array, og -1 for at gøre det **nul-baseret**.

```JavaScript 
const slidesLength = slides.length - 1;
```

Nu genbruger vi variablen, de steder vi har brug for antallet af ``slides``, i vores karrusel. Vi har brug for længen i vores ``next()`` og ``previous()`` funktioner. 

1. Kan du se hvordan vi genbruger ``slideLength`` variablen?.

Så derfor, når du trykker ``Frem`` og ``Tilbage`` knapperne, så kan du se at det aktive billede får en border-radius.

Det eneste vi har ændret på i den forbindelse, er vores ``setActiveSlide()`` funktion. Det er her, vi aktivere det aktive valgte element udfra vores index.

Lad os kigge på den.
```JavaScript
const setActiveSlide = (index) => {
    
    // Slides er et array, et array af elementer.
    // Her loop´er, vi over hvert eneste element (slide) i (slides)
    slides.forEach( (slide) => {

        // på hver slide fjerner vi class="active".
        slide.classList.remove('active');
    });

    // På vores aktive slide tilføjer vi class="active".
    slides[index].classList.add('active');
};
```

Vi gør dette for at kun have 'active' classen på vores aktive element.

1. Åbn inspektoren og kig på html´en, når du klikker.
    * Læg mærke til hvordan 'active' klassen flytter sig.
    * prøv at tilføj en anden klasse, uden at fjerne den. og kig efter i inspektoren.
        * ```slides[index].classList.add('TEST-TEST-TEST');```

Nu oplever vi sammenspillet, imellem JavaScript, Html og CSS.

For i vores ``opgave_03.css`` har vi tilføjet lidt nyt.

Vi har tilføjet en `.active` klasse. Som gør at vi kan style `.slider-slide` når den har en active klasse.

Men som du også kan se har vi en ``display-block`` og det er fordi vi gerne vil udnytte det, til at gøre den synlig.

```CSS
.slider .slider-slides .slider-slide.active {

    border-radius: 32px;
    display: block;

}
```
For hemmeligheden er, at vi i vores generelle ``slides-slide`` style har en udkommenteret ``display-none``, når vi slår den til, vil alle billeder blive usynlige, med mindre, de har klassen ``active``, som ovenfor. 

```CSS 
.slider .slider-slides .slider-slide{
    
    /* display: none; */
    width : 100%;
}
```

1. Fjern udkommenteringen, (display:none) og se hvordan vi nu, kun har ét synlig billedet. 
2. Kig i html´en i inspektoren når du skifter billeder.
3. Prøv at tilføje/fjerne billeder fra html´en.

I opgave 4 kigger vi på hvordan vi kan få denne karrusel til at skifte slides automatisk.

Gå til [Opgave 04](/opgave_04/opgave_04.md).