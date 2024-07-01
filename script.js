document.addEventListener('DOMContentLoaded', function() {
    const ingredientsDiv = document.getElementById("ingredients"); // div voor ingrediënten
    const pizzaBase = document.getElementById("pizza-base"); // afb van de pizzabodem

    pizzaBase.style.width = '90%';

    // Functie voor nieuw ingrediënt toevoegen aan pizza
    function addIngredient(ingredient) {
        const img = document.createElement("img");
        img.src = ingredient;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '90%';
        ingredientsDiv.appendChild(img);
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

        // Als er een bron is gevonden, voeg het ingrediënt toe aan de pizza
        if (ingredientSrc) {
            addIngredient(ingredientSrc);
        }
    }

    // Voeg event listeners toe aan alle knoppen binnen het ingredienten-kiezen div
    document.querySelectorAll('#ingredienten-kiezen button').forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });

    // Voeg een event listener toe aan de Klaar knop
    document.getElementById('finish').addEventListener('click', function() {
        alert("Eet smakelijk!"); // Toon een alert als feedback
    });

    // Voeg een event listener toe aan de Opnieuw beginnen knop
    document.getElementById('reset').addEventListener('click', function() {
        ingredientsDiv.innerHTML = ""; // Wis alle ingrediënten door de innerHTML leeg te maken
    });
});

//bronnen
// https://www.w3schools.com/js/js_if_else.asp
// https://www.youtube.com/watch?v=rjLHje_SkE4
// https://www.youtube.com/watch?v=N8ap4k_1QEQ
// https://www.w3schools.com/jsref/event_onclick.asp