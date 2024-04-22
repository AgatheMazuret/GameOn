// Cette fonction est utilisée pour modifier la classe CSS d'un élément HTML avec l'identifiant "myTopnav".
function editNav() {
  // Récupère l'élément HTML avec l'identifiant "myTopnav"
  let x = document.getElementById("myTopnav");

  // Vérifie si la classe de l'élément est "topnav"
  if (x.className === "topnav") {
    // Si oui, ajoute la classe "responsive" à la classe existante
    x.className += " responsive";
  } else {
    // Sinon, remplace la classe existante par "topnav"
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebtn = document.querySelectorAll(".close");

// Écoute les événements de clic sur chaque bouton modal et lance la fonction launchModal()
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Écoute les événements de clic sur chaque bouton de fermeture et lance la fonction closeModal()
closebtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Cette fonction est utilisée pour afficher le modal en changeant son style pour le rendre visible.
function launchModal() {
  // Change le style de l'élément avec la classe "bground" pour afficher le modal
  modalbg.style.display = "block";
}

// Cette fonction est utilisée pour cacher le modal en changeant son style pour le rendre invisible.
function closeModal() {
  // Change le style de l'élément avec la classe "bground" pour cacher le modal
  modalbg.style.display = "none";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = []; // Tableau pour stocker les erreurs

  try {
    const valeurFirst = firstName.value.trim();
    if (!/^[a-zA-Z]+$/.test(valeurFirst)) {
      errors.push('Le champ du prénom est vide ou contient des caractères non valides');
    }

    const valeurLast = lastName.value.trim();
    if (!/^[a-zA-Z]+$/.test(valeurLast)) {
      errors.push('Le champ du nom est vide ou contient des caractères non valides');
    }

     // Gestion des erreurs
     if (errors.length === 0) {
      console.log('Tous les champs sont remplis et valides');
    } else {
      // Afficher toutes les erreurs
      errors.forEach(error => console.error(error));
    }
} catch (error) {
    console.error(error.message);
}

});