document.addEventListener('DOMContentLoaded', () => {
    const ingredientsDiv = document.getElementById("ingredients");
    const pizzaBase = document.getElementById("pizza-base");

    pizzaBase.style.width = '40%'; 

    function addIngredient(ingredient) {
        const img = document.createElement("img");
        img.src = ingredient;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '40%';
        ingredientsDiv.appendChild(img);
    }

    function handleButtonClick(event) {
        const id = event.target.id;
        let ingredientSrc = "";

        if (id === "tomatensaus") {
            ingredientSrc = "images/tomatensaus.svg";
        } else if (id === "pesto") {
            ingredientSrc = "images/pesto.svg";
        } else if (id === "champi") {
            ingredientSrc = "images/champignons.svg";
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
            ingredientSrc = "images/mozzarella.svg";
        } else if (id === "cheddar") {
            ingredientSrc = "images/cheddar.svg";
        }

        if (ingredientSrc) {
            addIngredient(ingredientSrc);
        }
    }

    document.querySelectorAll('#ingredienten-kiezen button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.getElementById('finish').addEventListener('click', () => {
        alert("Je pizza is klaar!");
    });

    document.getElementById('reset').addEventListener('click', () => {
        ingredientsDiv.innerHTML = "";
    });
});
