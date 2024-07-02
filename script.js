document.addEventListener('DOMContentLoaded', function() {
    const ingredientsDiv = document.getElementById("ingredients"); // div voor ingrediënten
    const pizzaBase = document.getElementById("pizza-base"); // afb van de pizzabodem
    const ingredientButtons = document.querySelectorAll('#ingredienten-kiezen button'); // alle knoppen voor ingrediënten
    const addedIngredients = []; // Array om toegevoegde ingredienten bij te houden

    pizzaBase.style.width = '90%';

    // Functie: nieuw ingredient toevoegen aan pizza
    function addIngredient(ingredient) {
        const img = document.createElement("img");
        img.src = ingredient;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '90%';
        ingredientsDiv.appendChild(img);
        addedIngredients.push(img); // Voeg toe aan de lijst van toegevoegde ingrediënten
    }

    // Functie: reageren wanneer er op een ingredientenknop wordt geklikt
    function handleButtonClick(event) {
        const id = event.target.id;
        let ingredientSrc = "";

        // Bepaal de bron van het ingrediënt op basis van de id van de knop
        if (id === "tomatensaus") {
            ingredientSrc = "images/tomatensaus.svg";
        } else if (id === "wittesaus") {
            ingredientSrc = "images/wittesaus.svg";
        } else if (id === "champi") {
            ingredientSrc = "images/campi.svg";
        } else if (id === "paprika") {
            ingredientSrc = "images/paprika.svg";
        } else if (id === "olijven") {
            ingredientSrc = "images/olijven.svg";
        } else if (id === "ui") {
            ingredientSrc = "images/ui.svg";
        } else if (id === "ham") {
            ingredientSrc = "images/ham.svg";
        } else if (id === "pepperoni") {
            ingredientSrc = "images/pepperoni.svg";
        } else if (id === "garnaal") {
            ingredientSrc = "images/garnaal.svg";
        } else if (id === "kip") {
            ingredientSrc = "images/kip.svg";
        } else if (id === "mozzarella") {
            ingredientSrc = "images/mozarella.svg";
        } else if (id === "gorgonzola") {
            ingredientSrc = "images/gorgonzola.svg";
        }

        // Log de bron om te debuggen
        console.log("Ingredient source:", ingredientSrc);

        // Als bron is gevonden -> voeg ingrediënt toe aan de pizza
        if (ingredientSrc) {
            addIngredient(ingredientSrc);
        }
    }

    // Voegt event listeners toe aan alle knoppen binnen het ingredienten-kiezen div
    ingredientButtons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });

    // Functie: geluid afspelen
    function playSound(soundSrc) {
        const audio = new Audio(soundSrc);
        audio.play();
    }

    // Voeg een event listener toe aan de Klaar knop
    document.getElementById('finish').addEventListener('click', function() {
        alert("Eet smakelijk!"); // Toon een alert als feedback

        // Speel geluid af
        playSound('Pizza Time.mp3');
    });

    // Voeg een event listener toe aan de Opnieuw beginnen knop
    document.getElementById('reset').addEventListener('click', function() {
        ingredientsDiv.innerHTML = ""; // Wis alle ingrediënten door de innerHTML leeg te maken
        addedIngredients.length = 0; // Maak de array van toegevoegde ingrediënten leeg
    });

    // Voeg een event listener toe aan de Stap terug knop
    document.getElementById('back').addEventListener('click', function() {
        if (addedIngredients.length > 0) {
            const lastIngredient = addedIngredients.pop(); // Verwijder het laatste ingredient uit de array
            ingredientsDiv.removeChild(lastIngredient); // Verwijder het ingredient uit de DOM
        }
    });
});

//bronnen
// https://www.w3schools.com/js/js_if_else.asp
// https://www.youtube.com/watch?v=rjLHje_SkE4
// https://www.youtube.com/watch?v=N8ap4k_1QEQ
// https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/jsref/jsref_pop.asp

//images
//https://www.shutterstock.com/image-photo/sliced-red-onion-ring-on-white-1434235535
//https://wppizzatime.com/product/margherita-pizza/
//https://www.vecteezy.com/png/21398118-sliced-mushroom-isolated-on-a-transparent-background
// https://www.stickpng.com/img/food/seafood/large-shrimp
// https://www.istockphoto.com/nl/foto/blauwe-kaas-gm1258635855-368989683
// https://pngimg.com/image/33341
//https://www.shutterstock.com/search/shredded-chicken?image_type=vector
//https://www.123rf.com/photo_54857815_single-slice-of-mozzarella-cheese-isolated-over-the-white-background-set-of-two-different.html
//https://www.vectorstock.com/royalty-free-vector/ripe-black-olive-slice-vector-20256875
//https://www.vecteezy.com/png/21356157-slice-of-paprika-isolated-on-a-transparent-background
//https://www.istockphoto.com/nl/foto/enkel-plakje-pepperoni-vlees-ge%C3%AFsoleerd-op-wit-met-pad-schot-van-boven-gm1153708773-313443493

//sounds
//https://www.myinstants.com/en/instant/peter-parker-pizza-time-83025/

//extra js aspect
//https://stackoverflow.com/questions/53987982/why-does-audio-not-play-in-javascript