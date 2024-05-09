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
const form = document.querySelector('form');
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById('email');
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const radios = document.querySelectorAll('input[type="radio"][name="location"]');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');


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

  // Fonction pour ajouter un message d'erreur à un élément parent
  function addError(parentElement, errorMessage) {
    // Définir l'attribut "data-error-visible" sur true pour rendre l'erreur visible
    parentElement.setAttribute("data-error-visible", "true");
    // Définir l'attribut "data-error" avec le message d'erreur spécifié
    parentElement.setAttribute("data-error", errorMessage);
    // Ajouter l'erreur au tableau des erreurs
    errors.push(errorMessage);
  }

  // Fonction pour supprimer un message d'erreur d'un élément parent
  function removeError(parentElement) {
    // Vérifier si l'élément parent existe et s'il a l'attribut "data-error-visible" défini sur true
    if (
      parentElement &&
      parentElement.getAttribute("data-error-visible") === "true"
    ) {
      // Supprimer l'attribut "data-error-visible" pour masquer l'erreur
      parentElement.removeAttribute("data-error-visible");
    }
  }
  try {

    // Vérification du champ du prénom
    const valeurFirst = firstName.value.trim();
    if (!/^[a-zA-Z]{2,}$/.test(valeurFirst)) {
      const parentElement = firstName.parentNode;
      const errorMessage = 'Le champ du prénom est vide ou contient des caractères non valides';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(firstName.parentNode);
    }

    // Vérification du champ du nom
    const valeurLast = lastName.value.trim();
    if (!/^[a-zA-Z]{2,}$/.test(valeurLast)) {
      const parentElement = lastName.parentNode;
      const errorMessage = 'Le champ du nom est vide ou contient des caractères non valides';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(lastName.parentNode);
    }

    // Vérification du champ de l'email
    const valeurEmail = email.value.trim();
    const parentElement = email.parentNode;

    if (!valeurEmail) {
      const errorMessage = 'Le champ de l\'email est vide';
      addError(parentElement, errorMessage);
    } else if (!regexEmail.test(valeurEmail)) {
      const errorMessage = 'Le champ de l\'email contient une adresse invalide';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide 
      removeError(parentElement);
    }


    // Vérification du champ de la date de naissance
    const valeurBirth = birthdate.value.trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(valeurBirth)) {
      const parentElement = birthdate.parentNode;
      const errorMessage = 'Le champ de la date de naissance est vide ou contient une date invalide';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(birthdate.parentNode);
    }

    // Vérification du champ de la quantité
    const valeurQuantity = quantity.value.trim();
    if (!/^[0-9/]+$/.test(valeurQuantity)) {
      const parentElement = quantity.parentNode;
      const errorMessage = 'Le champ de la quantité est vide ou contient des caractères non valides';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(quantity.parentNode);
    }

    // Vérification des boutons radio avec boucle for
    let isRadioChecked = false; // Variable pour vérifier si au moins un bouton est coché
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        isRadioChecked = true;
        break; // Sortir de la boucle dès qu'un bouton est coché
      }
    }

    if (!isRadioChecked) {
      const parentElement = radios[0].parentNode;
      const errorMessage = 'Aucune ville n\'a été sélectionnée';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(parentElement);
    }


    // Vérification de la case à cocher pour les conditions d'utilisation
    const check1Checked = document.getElementById("checkbox1").checked;

    if (!check1Checked) {
      const parentElement = checkbox1.parentNode;
      const errorMessage = 'Les conditions d\'utilisation n\'ont pas été acceptées';
      addError(parentElement, errorMessage);
    } else {
      // Supprimer le data-error si le champ est valide
      removeError(parentElement);
    }

    // Vérification de la case à cocher pour la demande de notification des évènements
    const check2checked = document.getElementById("checkbox2").checked;

    if (!check2checked) {
      errors.push("L'utilisateur ne souhaite pas être prévenu des prochains évènements");
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