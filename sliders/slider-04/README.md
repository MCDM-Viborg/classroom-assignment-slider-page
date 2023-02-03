# Opgave 4.

Her i Opgave 4 laver vi bare en lille, men igen markant ændring.

1. Vi ændre vores slide´s til at være et `<div>` element med vores `<img>` element inden i.

2. Derfor ændre vi også lidt på vores css.

Det er ikke meget, men vigtigt derfor kigger vi bare på det i denne opgave.
Det er de små detaljer der giver os en masse muligheder.

Alstå i `opgave_04.html` dokumentet har vi ændret fra at vores slide var
```HTML
 <img class="slider-slide" src="/common/assets/squares/product_1.jpg"  alt="Produkt 1"/>
```
til 
```HTML
<div class="slider-slide">
    <img src="/common/assets/squares/product_1.jpg"  alt="Produkt 1"/>
</div>
```

Vi har pakket vores ``<img>`` ind i et ``<div>`` element. Vi har også flytte vores `.slider-slide` classe op på div elementet, da det nu er dette element der er *vores* slide. Så det vil også være dette element der er aktivt.

```HTML
<div class="slider-slide active">
    <img src="/common/assets/squares/product_1.jpg"  alt="Produkt 1"/>
</div>
```

Dette er en væsentlig detalje. Det er vigtigt at vi bruger vores yderste element som vores ``slider-slide`` element. Det giver os muligheder for at forme vores `.css` så når ``slider-slide`` er active, altså ``class="slider-slide active"``. Så kan vores elementer inde i ``slider-slide`` såsom img, let styles i ``.css``.

Og det er det vi gør. Vi ændre lidt i ``.css`` for at imødekomme vores ændringer.

```CSS

.slider .slider-slides .slider-slide {
    
    display: none;

}

.slider .slider-slides .slider-slide img {

    width : 100%;

}

.slider .slider-slides .slider-slide.active {

    display: block;

}

.slider .slider-slides .slider-slide.active img{

    border-radius: 32px;

}

```

1. Nu er det ``.slider-slide`` der skal være usynlig som udgangspunkt.
2. Vores `img` skal stadig være 100% i bredden. Men er nu inde i ``slider-slide`` elementet.
3. Det er vores ``.slider-slide`` som skal være synlig når den er `active`
4. Der er vores ``img`` der skal have runde hjørner når ``.slider-slide`` er ``active``.

### HUSK.

Husk på at vi intet har gjort i vores javascript. Den er glad sålænge det får et array og den kan sætte klasse ``active`` på det element der er aktivt.

Herfra kan vi ændre vores ``slide`` til næsten hvad som helst så længe elemnterne ligger inde i vores ``<div class="slider-slide"></div>`` element.

Det kigger vi på i opgave 5

Gå til [Opgave 05](/opgave_05/opgave_05.md).