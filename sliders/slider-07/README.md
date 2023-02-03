# Opgave 7.

Som skrevet i forrige opgave.

2. Vi skal opdatere vores "slides" i html dokumentet.
    1. Det er ikke så dynamisk.
    2. Flere muligheder for fejl i indtastning.
    3. Det er svært/bøvlet/uhensigsmæssigt at vedligholde/opdatere med nye elementer.

## Men vi starter med lidt forståelse.

I vores HTML har vi vores `slides` og ét par slides ser sådan ud:

*her er slide et og to.*
```HTML 
<div class="slider-slide">
    <div class="slider-slide-content">Produkt 1 - Her er en beskrivelse af dette produkt.</div>
    <img src="/common/assets/squares/product_1.jpg" alt="Produkt 1"/>
</div>

<div class="slider-slide">
    <div class="slider-slide-content">Produkt 2 - Her er en beskrivelse af dette produkt.</div>
    <img src="/common/assets/squares/product_2.jpg" alt="Produkt 2"/>
</div>
```

Hvad er det der adskiller slide 1 fra slide 2?

* Produkt titel.
* Billede sti.
* Billede alt tekst.

Så det er den **data** vi har brug for, for at skabe en slide. Så vi kan skabe et `object` der indeholder denne data.

*Sådan kunne et `object` se ud. for ét slide.*
```JavaScript
{
    'description' : 'Produkt 1 - Her er en beskrivelse af dette produkt.',
    'media' : {
        'text' : 'Produkt 1',
        'image' : '/common/assets/squares/product_1.jpg'
    }
}
```

Vi har en description `property` og en media `property`.
* *description* er en **streng**.
* *media* er endnu et **object**.
    * der indeholder
        * *text* som er en **streng**.
        * *image* som er en **streng**.

Og hvis vi husker tilbage til opgave 1. Så husker vi at vi der havde alle vores billeder i et array i vores JavaScript.

På samme måde kan vi samle vores data objekter, vores slides, i et array.

```JavaScript
let data = [
    {
    'description' : 'Produkt 1 - Her er en beskrivelse af dette produkt.',
    'media' : {
            'text' : 'Produkt 1',
            'image' : '/common/assets/squares/product_1.jpg'
        }
    },
    {
        'description' : 'Produkt 2 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 2',
            'image' : '/common/assets/squares/product_2.jpg'
        }
    }
]
```

Nu har vi et `array` af `objekter`. Det kan vi løbe igennem, nøjagtig som vi løb igennem, vores billede-stier i opgave 1.

### Men inden vi gør det, er der noget andet vi skal se på.

Det vi ultimativt vil, er at skrive html elementer, ind i vores slides `<div class="slider-slides"></div>` container.

Altså når vi løber over vores data så skriver vi et **nyt element** ind i vores html-dokument.

Herunder er resultatet når vi har loop´et over vores **data** og indsat et slide for hver data object (2 stk) ind i `<div class="slider-slides"></div>` containeren.


```HTML 
<div class="slider-slides">

    <div class="slider-slide">
        <div class="slider-slide-content">Produkt 1 - Her er en beskrivelse af dette produkt.</div>
        <img src="/common/assets/squares/product_1.jpg" alt="Produkt 1"/>
    </div>

    <div class="slider-slide">
        <div class="slider-slide-content">Produkt 2 - Her er en beskrivelse af dette produkt.</div>
        <img src="/common/assets/squares/product_2.jpg" alt="Produkt 2"/>
    </div>

</div>

```

Så nu vi har vores data på plads til to elementer. I ``opgave_07.js`` har vi 
placeret det i bunden sammen med vores kald til ``init()`` funktionen, med vores data som parameter, ``init(data)``. Vi kommer ind på ``init()`` funktionen i næste afsnit.

```JavaScript
let data = [
    {
    'description' : 'Produkt 1 - Her er en beskrivelse af dette produkt.',
    'media' : {
            'text' : 'Produkt 1',
            'image' : '/common/assets/squares/product_1.jpg'
        }
    },
    {
        'description' : 'Produkt 2 - Her er en beskrivelse af dette produkt.',
        'media' : {
            'text' : 'Produkt 2',
            'image' : '/common/assets/squares/product_2.jpg'
        }
    }
]

init(data);
```

Nu mangler vi bare, at loop´e over vores data array, og skrive elmenter i html dokumentet.

Vi opretter to funktioner til dette. 

Da vores data er nødvendig for at vores karrusel virker, vil det være naturlig at starte med at "hente" data og derefter sætter karrusellen igang.

Og vi har allerede to funktioner (*se opgae_06.js*) i bunden af vores .js fil som "starter" vores karrusel. 

```JavaScript
setActiveSlide(currentImageIndex); // Sætter vores start index til 0
setAutoBtnText(isAutoPlaying); // Sætter teksten på vores knap afhængigt af `isAutoPlaying`
```

Så lad os lave en funktion der indeholder det arbejde vi skal gøre for at "starte" karrusellen.

Den funktion kalder vi ``init()``, for initialisering, altså "opstart".

Her ser vi den udelukkende som en funktion der kalder de to funktioner der "starter"/initialisere vores komponent.


```JavaScript
const init = (data) => {
  
    ... | ...

    setActiveSlide(currentImageIndex);
    setAutoBtnText(isAutoPlaying);
    
};
```

Nu kan jeg i bunden af vores script kalde ``init()`` og vores karrusel vil blive "startet".

Men nu er vi også interreseret i at få vores data, loop´e over det, og skive slides ind i vores HTML. 

Som man kan se i ``opgave_07.js`` filen så kalder vi nederst ``init(data)`` og ligeoven over har vi data arrayet. Så vi sender altså vores data array med ind i funktionen.

```JavaScript 
const init = (data) => {
  
    // Vi loop´er over hvert slide i vores data array. 2 stk.
    data.forEach((slideData) => {
        
        /* 
            Vi skriver HTML ind i vores slidesContainer element.
            Vi benytter funktioen slideTmpl(slide) til at lave den slide template vi gerne vil  skrive i HTML´en.
        */
        slidesContainer.insertAdjacentHTML('beforeend', slideTmpl(slideData));

    });

    // Da vi FØRST NU har skrevet elementer i vores HTML så er det også først nu vi kan få fat i DOM-elementerne.
    slides = document.querySelectorAll('#slider01 .slider-slide');
    
    // Vi kender længden (som vi skal bruge til karrusel mekanikken) ved at se på antallet af slides i vores data array.
    slidesLength = data.length - 1;

    ... | ...

};
```

Vi benytter ``insertAdjacentHTML`` som giver os mulighed for at tilføje html.
Da vi loop´er (forEach) over hvert slide, så vil vores funktion ``slideTmpl(slideData)``, blive kaldt for hvert slide der er i vores data (2.stk).

Og hvis vi kigger på funktionen ``slideTmpl(slideData)`` så ser den således ud.

```JavaScript 
const slideTmpl = (slide) => `<div class="slider-slide">
    <div class="slider-slide-content">${slide.description}</div>
    <img src="${slide.media.image}" alt="${slide.media.text}"/>
</div>`;
```

Den ligner vores slide fra HTML´en, og det er vores slide fra HTML´en. Læg mærke til at vi i loop´et sender "slideData" med som parameter, til denne funktion, hvert slideData indeholder data´en for hvert slide.

*slideData for slide 1*
```JavaScript
{
    'description' : 'Produkt 1 - Her er en beskrivelse af dette produkt.',
    'media' : {
        'text' : 'Produkt 1',
        'image' : '/common/assets/squares/product_1.jpg'
    }
}
```

Så hvis vi kigger på ``slideTmpl`` funktionen, så udskirver den en template, men indsætter den data vi har som adskiller hvert slide.

* Produkt titel.
* Billede sti.
* Billede alt tekst.

Så i `slideTmpl(slide)` funktionen udskifter vi værdierne ved at benytte ``${}`` inde i vores *literals*/backticks. Derfor får vi en template for hvert slide med den relevante data.

Nu skal du bruge lidt tid på at kigge dette igennem.
1. Læg mærke til hvordan der er skrevet to slides i HTML (brug inspektoren)
2. Tilføj en slide til data arrayet.
3. Alt vores funktionalitet er den samme, men vi er nødt til at ændre lidt på formen. Bland andet at vi først kan hente vores "elementer" efter de er skrevet i html´en. Derfor har vi flyttet lidt på ``slides = document.querySelectorAll('#slider01 .slider-slide');`` Prøv at sammenlign ``opgave_06.js`` og ``opgave_07.js``.

Alt dette åbner nu endnu flere døre. Men inden vi skal rende ind og ud af de døre, bør vi kigge på vores fil og hvordan vi kan få bragt lidt orden ind.

