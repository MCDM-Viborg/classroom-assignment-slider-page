# Opgave 1.

Her har vi en helt simpel "billede-skifter".

Vi har et ```<img>``` tag som har en source attribut ```<img src="">```

Hvis vi tildeler source attributten en billedesti så får vi et billede.

Her henter vi et billede i vores assets mappe.      
```Html
<img src="../common/assets/squares/product_1.jpg">
```

Med javascript kan vi ændre ``src`` attributtens indhold.

Det er det, vi gør i denne opgave. Hver gang vi trykker på ``Frem`` og ``Tilbage`` knapperne går vi *frem* og *tilbage* i vores række (``array``) af billeder.
`
Vi gør det helt simple. Vi sætter en ny ``src="../common/assets/squares/product_2.jpg"`` på ``<img>`` tagget og billedet skifter.

Så i denne opgave handler det mest om selve mekanikken i, hvordan vi går frem og tilbage, i vores billeder. Altså, hvordan skifter vi index, og herefter ændre ``src`` attributten.

Vi skal bruge to funktioner ``next()`` og ``previous()`` som vi kan kalde, når vi vil gå frem og tilbage.

Så forventer vi at når vi trykker ``Next``. Så vælger vi næste billede og ligeledes vælger vi det forrige, hvis vi går tilbage.

Så vi har en tæller/index som vi skal tælle op og ned så vi kan vise det rigtige billede.

Så hvis vores index er 0 og vi trykker ``Frem``. Så skal index´et tælle op til 0, 1, 2, 3 osv.

På samme måde hvis vores index er 5 og vi trykker ``Tilbage``. Så skal index´et tælle ned, 4, 3, 2, 1 osv.

**Tricket** er nu, at vi **skal vide** om der er 3, 10 eller 18 billeder i den serie af billeder vi har.

Vi skal vide at der er 9 billeder, ellers kan vi ikke skifte til billede 1 når man ser det sidste billede, altså 9 i vores tilfælde. Hvis vi bare tæller op til 10 og vi ikke har 10 billeder så vil vores karrusel fejle.

Når vi når billede 9 og vi trykker ``Next`` så skal vi *enten* ændre index til 0, altså det første billede eller tvinge brugeren til at gå baglæns.

På samme måde skal kan vi ikke gå baglæns længere tilbage end til index 0, så vil `-1` vil give en fejl. Så når vi er ved billede 0, så skal vi *enten* gå til det sidste billede i vores array altså billede 9 (index = 8). Eller vi skal tvinge brugeren til at gå fremad.

I vores løsning er det en karrusel, og vi går bare rundt og rundt og rundt og rundt.

Måden man finder antallet af billeder på, vil i de fleste tilfælde være, at finde længden af et `array`. Enten er det et `array` af elementer, eller også er det et `array` af data. Det vil *næsten* altid være et array.

I første opgave er dette vores array: (*vær opmærksom på jeres sti kan være anderledes hvir i placere jeres billeder anderledes.*)
```
let images = [
    '../common/assets/squares/product_1.jpg',
    '../common/assets/squares/product_2.jpg',
    '../common/assets/squares/product_3.jpg',
    '../common/assets/squares/product_4.jpg',
    '../common/assets/squares/product_5.jpg',
    '../common/assets/squares/product_6.jpg',
    '../common/assets/squares/product_7.jpg',
    '../common/assets/squares/product_8.jpg',
    '../common/assets/squares/product_9.jpg'
];
```
og vi finder længden af et array med

```JavaScript
console.log(images.length) // --> 9
```

I dette tilfælde ``9``.

En detalje med arrays er, at de er **nul-baseret**.

det betyder at hvis du skriver.

```JavaScript
console.log(images[0]) // --> ../common/assets/squares/product_1.jpg
```
Så får du følgende ``../common/assets/squares/product_1.jpg`` resultat i consollen. Altså det første billede.

Hvis du derimod skriver ``9`` som var længden på vores array

```JavaScript
console.log(images[9]) // --> undefined
```

Så får du ``undefined`` som resultat, fordi, på index plads 9, er der **ikke** et billede. Hvis du tæller alle sti´er i vores array, men starter fra ``0`` så ender du med, at det sidste billede er ``8``, alstå: ``0,1,2,3,4,5,6,7,8`` = ``9 billeder.``. 

Så fordi vores ``index`` skal være **nul-baseret** og det faktum, at når vi spørger et ``array`` om hvor mange elementer det indeholder, så aflevere den et **1-baseret** resultat, altså ``9`` så vi trækker 1 fra, for at få den  **nul-baseret** længde.

```JavaScript
console.log(images.length - 1) // --> 8
```
Altså: ``8``. Så ved vi at vi nu kan gå igennem vores array med et index fra
0 til 8 og få alle 9 billeder med.

```JavaScript
console.log(images[0])  // --> '../common/assets/squares/product_1.jpg'
console.log(images[1])  // --> '../common/assets/squares/product_2.jpg'
console.log(images[2])  // --> '../common/assets/squares/product_3.jpg'
console.log(images[3])  // --> '../common/assets/squares/product_4.jpg'
console.log(images[4])  // --> '../common/assets/squares/product_5.jpg'
console.log(images[5])  // --> '../common/assets/squares/product_6.jpg'
console.log(images[6])  // --> '../common/assets/squares/product_7.jpg'
console.log(images[7])  // --> '../common/assets/squares/product_8.jpg'
console.log(images[8])  // --> '../common/assets/squares/product_9.jpg'
```

Nu kan vi i vores ``next()`` og ``previous()`` funktioner. Tælle op og ned og sætter ``src`` attributten.

Her kigger vi udelukkende på delen der tæller vores index op.

```JavaScript
const nextImage = () => {

    // Vi undersøger om vores billede er det SIDSTE i vores array.
    // Er vi nået til enden, så skal vi state forfra.
    if(currentImageIndex >= images.length - 1) {

        // Hvis vores index er lig med det antal af billeder vi har, altså det sidste.
        // Så starter vi forfra og sætter den til 0, for at vælge det første billede.
        currentImageIndex = 0;
      
    } else {

        // Hvis vi ikke er ved det sidste billede så tæller vi op.
        currentImageIndex += 1;

    }

    // Vi kalder funktionen der sætter vores aktive billede med vores nye opdateret currentImageIndex.
    setActiveSlide(currentImageIndex)

}
```

Her kigger vi udelukkende på delen der tæller vores index ned.

```JavaScript
const previousImage = () => {

    // Vi undersøger om vores index er det FØRSTE i vores array, altså 0.
    if(currentImageIndex === 0) {
        /* 
            Hvis vores index er 0 så vil den næste billede ('previous') være det 
            sidste element i vores Array af billeder.
            Vi går baglæns og vælger sidste billede i array´et.
        */
        currentImageIndex = images.length - 1;

    } else {

        // Hvis vi ikke er ved første billede så tæller vi bare vores index én ned.
        currentImageIndex -= 1;

    }

    // Vi kalder funktionen der sætter vores nye aktive billede.
    setActiveSlide(currentImageIndex)
}
```

Vi sætter vores aktive element i funktionen ``setActiveSlide()``.
Vi sender vores nye index med ``setActiveSlide(currentImageIndex)`` og i selve funktionen 
ændre vi ``<img>`` tagget´s ``src`` attribut og dens ``alt`` attribut.


```JavaScript
const setActiveSlide = (index) => {
    slide.src = images[index]; // index er 0,1,2,3,4,5,6,7,8
    slide.alt = 'Produkt Index ' + index; // F.eks. 'Produkt Index 2'
}
```

Vi kalder ``Next`` og ``Previous`` funktionerne i HTML´en, som en `onclick` event på hver ``<button>``.

Så det eneste vi har brug for, udover det vi har beskrevet, er en reference til vores ``<img>`` tag og vores globale index. 

Vi laver vores refrence med en ``querySelector`` og vi referer via vores slider id til ``<img>`` tagget og ikke til klassen, hvilket vi også kunne gøre.

```JavaScript 
const slide = document.querySelector('#slider01 img');
```

Herefter sætter vi den globale index variable som holder index tallet for vores nuværende position = 0, når siden loades.

```JavaScript
let currentImageIndex = 0;
```

Til allersidst sørger vi for at der er et billede der bliver vist som udgangspunkt.
Vi vælger at vise det første billede, ved at kalde ``setActiveSlide()``.

```JavaScript
setActiveSlide(currentImageIndex);
```
Fordi ```currentImageIndex = 0``` når scriptet bliver loaded, skriver vi i virkeligheden

```JavaScript
setActiveSlide(0);
```
Og vælger første billede.

## Vigtig.

Det er forståelsen for hvordan vi går frem og tilbage med et index der er det vigtige i denne opgave. Vi ændre næsten ikke på denne struktur. 

Fra nu af handler det mere om hvordan vi kan lave ``slides`` og ikke bare skifte en billede-sti. Men det vigtigste er: *selve skift frem og tilbage funktionaliteten, vil stort set ikke ændre sig*. Det vil være baseret på et array, af den eller anden form, et array hvor vi skal bevæge os frem og tilbage ved hjælp af et ``index``, et **nul-baseret** ``index``.


I opgave to, optimere vi lige lidt på selve Next og Previous funktionerne.

Gå til [Opgave 02](/opgave_02/opgave_02.md).