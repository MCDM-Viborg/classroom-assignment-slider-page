# Opgave 6.

I denne opgave får vi vores karrusel til at køre automatisk.

Vi ville allerede kunne bruge dette på vores første opgave.

I virkeligheden er vores opgave jo bare at kalde vores `next()` funktion med et interval.

Så burde vores karrusel skifte billeder med det interval vi vælger.

Og det kan vi sagten i javascript. Der er dog et par ting man skal være opmærksom på i den forbindelse, især når man benytter JavaScripts indbyggede ``setInterval``.

I virkeligheden er ``setInterval`` meget simpel.

Her kalde vi en funktion ``next()`` med et interval på 2000 milli-sekunder, altså 2 sekunder. Hvert andet sekund bliver `next()` funktionen kaldt og skifter vores billede.

Men ``setInterval`` har den egenskab at du kan aktivere den mange gange, så der i virkeligheden bliver skabt flere og flere ``setInterval``´s. Det gør at timingen bliver helt skør! Vi demonstrere det senere.

```JavaScript
setInterval(next, 2000);
```

Men for at modarbejde dette skaber vi en global variable til vores interval.

```JavaScript
let slideInterval = null; 
```
Nu kan vi sætter den til at indeholde vores interval-kald til funktionen.
```JavaScript
slideInterval = setInterval(next, 2000);
```

På den måde kan vi nu også nulstille vores interval ved at benyttel ``clearInterval()``.

```JavaScript
clearInterval(slideInterval);
```

Med den viden kan vi nulstiller vores interval og den stopper med at kalde ``next()`` funktionen.

Så vi tilføjer en knap til vores interface/html. En toggle AutoPlay knap..

```HTML
<button data-playstyle="auto">AutoPlay (de-active)</button>
```

Vores mål er.

1. At "autoplay" vores karrusel så den hvert 2. sekund skifter billede, fremad.
2. At ved klik på auto knappen starter og stopper vi "autoplay" og skriver "tilstanden" på knappen. ('active' eller 'de-active').

Lad os starte med nummer 1. 

Først opretter vi en variable der holder på om vi afspiller i automode eller ej ``isAutoPlaying``.


```JavaScript
let isAutoPlaying = false;
```
Så vi starter med at være i IKKE autoplay mode.

Nu opretter vi en funktion der tager imod ét parameter, ``playing``.

```JavaScript
const autoPlay = (playing) => {

    // Vi nulstiller slideInterval, hvis der allerede køre et interval.
    clearInterval(slideInterval);

    // Hvis playing === true, så starter vi et nyt interval.
    if(playing)
    {
        //setInterval tar imod to parameter, en funktion og et interval.
        slideInterval = setInterval(next, 2000);   
    }

};
```

Vi bruger denne funktion til at tænde og slukke vores interval.

I ``setActiveSlide`` tjekker vi om hvilken tilstand isAutoPlaying er i ``true/false``.

```JavaScript 
const setActiveSlide = (index) => {
    
    ... | ...

    autoPlay(isAutoPlaying);
    
    ... | ...

};
```

Nu mangler vi at starte og stoppe vores autoplay funktionalitet.

Vi laver en knap i ui´et.
```JavaScript
<button data-playstyle="auto">AutoPlay (de-active)</button>
```

Vi skaber en reference i vores JavaScript.
```JavaScript
const toggleAutoPlayBtn = document.querySelector('[data-playstyle=auto]');
```

Vi opretter en Klik-Event til vores knap.

```JavaScript 
if(nextBtn && previousBtn && toggleAutoPlayBtn)
{

    ... | ...

    toggleAutoPlayBtn.addEventListener('click', toggleAutoPlay);

}
```

Og vi opretter en funktion som kan toggle vores autoplay når vi klikke på knappen.

```JavaScript
const toggleAutoPlay = () => {

    // Her benytter vi en NOT operator nemlig "!"
    // Vi siger i virkeligheden at isAutoPlaying skal være det modsatte af isAutoPlaying (NOT)isAutoPlaying, !isAutoplaying.

    /* 
        Så hvis isAutoplaying = true.
        Og der står isAutoplaying = !isAutoplaying.
        Så er det faktisk isAutoplaying = !true.
        Og NOT true er = false.

        Så på den måde kan du "vippe" true false med en (!) not operator. altså, true bliver false, og false bliver true.
    */  

    isAutoPlaying = !isAutoPlaying;
    
    // Nu kalder vi autoPlay med vores isAutoPlaying variable true/false.
    autoPlay(isAutoPlaying);

    // Og vi kalder en funktion der sætter teksten på vores knap. alt efter true/false. Altså isAutoPlaying.
    setAutoBtnText(isAutoPlaying);

};
```

Og vores ``setAutoBtnText`` funktion, så vi kan tilpasse teksten på knappen, ser således ud.

```JavaScript
const setAutoBtnText = (isAutoPlaying) => {
    toggleAutoPlayBtn.textContent = `AutoPlay ${isAutoPlaying ? '(active)' : '(de-active)' }`;
};
```

Vi benytter vore ``tenary operator`` til at afgøre hvilken tekst vi skriver i knappen.


### Inden vi går videre.

Nu kan vi starte og stoppe vores interval. Nu kunne man tænke over hvorvidt den skal stoppe når man mouseover osv. Det er en opgave jeg vil lade op til jer.

1. Prøv eventuelt at gå tilbage til opgave_02 og få den til at køre med et interval på 7 sekunder.

### Hvad er næste skridt?

Der er et problem stillinger vi burde tage højde for.

1. Vores fil er ved at blive rodet.
    1. Der sker mere og mere.
        1. Vi håndtere kun èn karrusel.
    2. Hvad gør vi hvis vi har flere billede karruseller?
        1. 2 eller flere på samme side.
2. Vi skal opdatere vores "slides" i html dokumentet.
    1. Det er ikke så dynamisk.
    2. Flere muligheder for fejl i indtastning.
    3. Det er svært/bøvlet/uhensigsmæssigt at vedligholde/opdatere med nye elementer.

I de næste par opgaver vil vi arbejde på begge punkter. Men vi starter i omvendt rækkefølge, vi starter med opgave problemstilling 2, opdatering og data.

Gå til [Opgave 07](/opgave_07/opgave_07.md).

