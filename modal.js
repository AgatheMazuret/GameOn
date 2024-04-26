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

  try {
    
    // Vérification du champ du prénom

    const valeurFirst = firstName.value.trim();
    if (!/^[a-zA-Z]{2,}$/.test(valeurFirst)) {
      if (!document.getElementById('first-error')) {
        const errorDiv = document.createElement('div');
        errorDiv.id = 'first-error'; // Ajoutez un ID unique à la div d'erreur
        errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
        const errorMessage = document.createTextNode('Le champ du prénom est vide ou contient des caractères non valides');
        errorDiv.appendChild(errorMessage);
        firstName.insertAdjacentElement('afterend', errorDiv);
        errors.push('Le champ du prénom est vide ou contient des caractères non valides');
      }
    }else {
      // Supprimer le message d'erreur si le champ est valide
      const errorDiv = document.getElementById('first-error');
      if (errorDiv) {
        errorDiv.remove();
      }
    }

    // Vérification du champ du nom
const valeurLast = lastName.value.trim();
if (!/^[a-zA-Z]{2,}$/.test(valeurLast)) {
  if (!document.getElementById('last-error')) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'last-error'; // Ajoutez un ID unique à la div d'erreur
    errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
    const errorMessage = document.createTextNode('Le champ du nom est vide ou contient des caractères non valides');
    errorDiv.appendChild(errorMessage);
    lastName.insertAdjacentElement('afterend', errorDiv);
    errors.push('Le champ du nom est vide ou contient des caractères non valides');
  }
} else {
  // Supprimer le message d'erreur si le champ est valide
  const errorDiv = document.getElementById('last-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

 // Vérification du champ de l'email
const valeurEmail = email.value.trim();
if (!valeurEmail) {
  if (!document.getElementById('email-error')) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'email-error'; // Ajoutez un ID unique à la div d'erreur
    errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
    const errorMessage = document.createTextNode('Le champ de l\'email est vide');
    errorDiv.appendChild(errorMessage);
    email.insertAdjacentElement('afterend', errorDiv);
    errors.push('Le champ de l\'email est vide');
  }
} else if (!regexEmail.test(valeurEmail)) {
  if (!document.getElementById('email-error')) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'email-error'; // Ajoutez un ID unique à la div d'erreur
    errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
    const errorMessage = document.createTextNode('Le champ de l\'email contient une adresse email invalide');
    errorDiv.appendChild(errorMessage);
    email.insertAdjacentElement('afterend', errorDiv);
    errors.push('Le champ de l\'email contient une adresse email invalide');
  }
} else {
  // Supprimer le message d'erreur si le champ est valide
  const errorDiv = document.getElementById('email-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}


    // Vérification du champ de la date de naissance
const valeurBirth = birthdate.value.trim();
if (!/^\d{4}-\d{2}-\d{2}$/.test(valeurBirth)) {
  if (!document.getElementById('birthdate-error')) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'birthdate-error'; // Ajoutez un ID unique à la div d'erreur
    errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
    const errorMessage = document.createTextNode('Le champ de la date est vide ou contient des caractères non valides');
    errorDiv.appendChild(errorMessage);
    birthdate.insertAdjacentElement('afterend', errorDiv);
    errors.push('Le champ de la date est vide ou contient des caractères non valides');
  }
} else {
  // Supprimer le message d'erreur si le champ est valide
  const errorDiv = document.getElementById('birthdate-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

    // Vérification du champ de la quantité
const valeurQuantity = quantity.value.trim();
if (!/^[0-9/]+$/.test(valeurQuantity)) {
  if (!document.getElementById('quantity-error')) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'quantity-error'; // Ajoutez un ID unique à la div d'erreur
    errorDiv.classList.add('error'); // Ajoutez une classe pour cibler les divs d'erreur
    const errorMessage = document.createTextNode('Le champ de la quantité est vide ou contient des caractères non valides');
    errorDiv.appendChild(errorMessage);
    quantity.insertAdjacentElement('afterend', errorDiv);
    errors.push('Le champ de la quantité est vide ou contient des caractères non valides');
  }
} else {
  // Supprimer le message d'erreur si le champ est valide
  const errorDiv = document.getElementById('quantity-error');
  if (errorDiv) {
    errorDiv.remove();
  }
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
      errors.push('Aucun lieu sélectionné');
    }

    // Vérification de la case à cocher pour les conditions d'utilisation
    const check1Checked = document.getElementById("checkbox1").checked;

    if (!check1Checked) {
      errors.push("Les conditions d'utilisation n'ont pas été acceptés ");
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