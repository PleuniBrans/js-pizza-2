// Wacht tot de hele pagina is geladen voordat de code wordt uitgevoerd
document.addEventListener('DOMContentLoaded', function() {
    // Haal verwijzingen op naar belangrijke elementen op de pagina
    const ingredientsDiv = document.getElementById("ingredients"); // Het div-element voor ingrediënten
    const pizzaBase = document.getElementById("pizza-base"); // De afbeelding van de pizzabodem

    // Pas de breedte van de pizzabodem aan naar 90% van zijn oorspronkelijke grootte
    pizzaBase.style.width = '90%'; 

    // Functie om een nieuw ingrediënt toe te voegen aan de pizza
    function addIngredient(ingredient) {
        // Maak een nieuw img-element aan
        const img = document.createElement("img");
        img.src = ingredient; // Stel de bron van het ingrediënt in
        img.style.position = 'absolute'; // Plaats het ingrediënt bovenop de pizzabodem
        img.style.top = '0'; // Bovenkant van het ingrediënten-div
        img.style.left = '0'; // Linkerkant van het ingrediënten-div
        img.style.width = '90%'; // Stel de breedte van het ingrediënt in
        ingredientsDiv.appendChild(img); // Voeg het ingrediënt toe aan het ingrediënten-div
    }

    // Functie om te reageren wanneer er op een ingrediëntenknop wordt geklikt
    function handleButtonClick(event) {
        const id = event.target.id; // Haal de id op van de geklikte knop
        let ingredientSrc = ""; // Variabele om de bron van het ingrediënt op te slaan

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

    // Voeg een event listener toe aan de "Klaar" knop
    document.getElementById('finish').addEventListener('click', function() {
        alert("Eet smakelijk!"); // Toon een alert als feedback
    });

    // Voeg een event listener toe aan de "Opnieuw beginnen" knop
    document.getElementById('reset').addEventListener('click', function() {
        ingredientsDiv.innerHTML = ""; // Wis alle ingrediënten door de innerHTML leeg te maken
    });
});
