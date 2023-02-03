# Opgave 2.

Her i Opgave 2 laver vi et par optimerings ændringer.

1. Vi laver vores ``next()`` og ``previous()`` funktioner mere kompakte.
    * Vi gør brug af **Conditional (ternary) operator**
2. Vi opretter ``event-listeners`` for vores knapper.
    * Så har vi alt javascript i javascript filen.

## Tenary Operator (Conditional Operator)

Referencer:     
* [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [MDN: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


Vi optimere vores ``next()`` og ``previous()`` funktioner.
Vi omskriver vores *if/else* til en *Tenary Operator*. 

Fordi vi arbejder med en enten/eller situation så har vi den mulighed at benytte en Tenary Operator.

Tag et kig på dette eksempel.

```JavaScript
if(myName === 'Anders')
{

    console.log('Hej Anders')

} else {

    console.log('Hej en anden, end Anders')

}
```
 Altså en enten/eller situation, hvis ``myName = 'Anders'`` så udskriver vi ``Hej Anders`` ellers udskrive vi ``Hej en anden, end Anders``.

Det kan vi omskrive til en `Tenary Operator`. Således.

```
(UDTRYK) ?  (gør dette hvis UDTRYKKET er SANDT) : (gør dette hvis UDTRYKKET er FALSK)
```
Altså:

```
let myName = 'Anders';
myName === 'Anders' ?  console.log('Hej Anders') : console.log('Hej en anden end Anders')
```

1. *Prøv at kopiere dette ind i din ``opgave_02.js`` og ændre navnet*.


Dette pricip har vi opdateret ``next()`` og ``previous()`` funktionerne med. Sammelign ``opgave_01.js`` med ``opgave_02.js``.

Her sætter vi vores currentImageIndex med en enten/eller Tenary Operator.

```JavaScript
const previousImage = () => {

    currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex -= 1;
    setActiveSlide(currentImageIndex);

};

const nextImage = () => {

    currentImageIndex = currentImageIndex >= images.length - 1 ? 0 : currentImageIndex += 1;
    setActiveSlide(currentImageIndex);

};
```

## Knapper

Vi fjerner vores ``onclick`` events fra vores html dokument og rykker den funtionalitet ind i vores javascript fil.

Vi starter med at lave referencer til vores knapper.

*opgave_02.js*
```JavaScript
// Vi tilføjer referencer til vores knapper.
const nextBtn = document.querySelector('[data-direction=next]');
const previousBtn = document.querySelector('[data-direction=previous]');
```
*opgave_02.html*
```HTML 
<button data-direction="previous">Tilbage</button>
<button data-direction="next">Frem</button>
```

Læg mærke til at vi henter den via deres ``data-attribut`` vi kunne også hente dem via .class eller #id.
(*data attribut, kommer vi tilbage til i andre opgaver, dette er mere for at udvide horisonten*),
Vi henter knapperne og tilføjer vores click events, hvis de to knapper findes i dokumentet.

```JavaScript
// Sætter knapper op. Hvis de to elementer findes. Så tilføjer vi 'Click' event-listeners.
if(nextBtn && previousBtn)
{
    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
}
```

Vi kalder **next** og **previous** funktionerne, via vores `click` event, når der bliver klikket på henholdsvis *frem* og *tilbage* knappernei browseren..

Det var optimering og flytning af alt **funktionalitet** til javascript filen.

I opgave tre skal vi prøve at have billederne i html dokumentet og skifte deres synlighed istedet for 'bare' at sætte en source ``src`` attribut.

Gå til [Opgave 03](/opgave_03/opgave_03.md).