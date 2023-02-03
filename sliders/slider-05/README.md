# Opgave 5.

I denne opgave udnytter vi, at vi kan berige vores slides og vores heler vore komponent.

1. Vi tilføjer et element der tæller hvor vi er i billede karrusellen (1 udaf 9).
2. Vi tilføjer et tekst element til hvert slide. 

Her er det et spørgsmål om at vi har tilføjet lidt html og css til vores slide.
Kig det igennem, sammenlign med ``opgave_04.css``. Undersøg hvordan de nye ændringer er stylet.

I JavaScripten ``opgave_05.js`` har vi lave 2 ændringer.

1. Vi har tilføjet en reference til vores nye 'slider-slides-display' element. Som viser (1 udaf 9 
```JavaScript 
const display = document.querySelector('.slider-slides-display');
```

2. Og i ``setActiveSlide`` funktionen sætter vi teksten på vores display element.
Vi benytter ``textContent`` og sammensætter den tekst vi gerne vil skrive ind i elementet.

I dette tilfælde 1 udaf 9, altså: **(nul-baseret-index + 1) udaf (nul-baseret-antal-af-billeder + 1)** = (1 udaf 9).

```JavaScript 
const setActiveSlide = (index) => {
    
    ...

    display.textContent = `${index + 1} udaf ${slidesLength + 1}`;
};
```
## Inden vi går viderer.

Nu har vi en karrusel der egentlig bare skal gøres pænere måske animere mere eller hvad ved jeg. Men dette er alle grund elementerne.

Nu vil vi fokusere lidt på funktionaliteter vi kan tilføje. Inden vi kigger på hvordan vi kan undgå at vi skal "hardcoded" vores elementer i HTML´en.

Men vi starter med lidt funktionalitet i opgave 6 hvor vi får vores Karrusel til at køre automatisk.

Gå til [Opgave 06](/opgave_06/opgave_06.md).