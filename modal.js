// Cette fonction est utilisée pour modifier la classe CSS d'un élément HTML avec l'identifiant "myTopnav".
function editNav() {
  // Récupère l'élément HTML avec l'identifiant "myTopnav"
  var x = document.getElementById("myTopnav");

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

// Sélectionne l'élément HTML représentant le fond du modal
const modalbg = document.querySelector(".bground");

// Sélectionne tous les boutons qui déclenchent l'ouverture du modal
const modalBtn = document.querySelectorAll(".modal-btn");

// Sélectionne tous les éléments de formulaire dans le modal
const formData = document.querySelectorAll(".formData");

// Sélectionne tous les éléments de fermeture de la modal
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

function validateForm() {
  // Liste des champs à vérifier
  const fields = ['first', 'last', 'email', 'birthdate', 'quantity'];
  // Variable pour stocker les erreurs
  let errors = '';

  try {
    // Vérification de chaque champ
    fields.forEach(function (field) {
      const element = document.getElementById(field);
      const errorElement = document.getElementById('error' + field.charAt(0).toUpperCase() + field.slice(1));
      errorElement.innerHTML = '';
      element.classList.remove('error-field');

      // Vérification du champ email et champs vides
      if ((field === 'email' && !/\S+@\S+\.\S+/.test(element.value.trim())) || element.value.trim() === "") {
        // Affichage de message d'erreur
        errorElement.innerHTML = field === 'email' ? "Veuillez saisir une adresse email valide." : "Veuillez remplir ce champ.";
        errors += field === 'email' ? "Veuillez saisir une adresse email valide.\n" : "Veuillez remplir ce champ.\n";
        element.classList.add('error-field');
      }
    });

    // Vérification de la sélection d'au moins un emplacement
    const radios = document.getElementsByName('location');
    const checkBox = document.getElementById("checkbox1");
    let isChecked = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        isChecked = true;
        break;
      }
    }

    if (!isChecked && checkBox.checked) {
      isChecked = true;
    }

    if (!isChecked) {
      document.getElementById('errorLocation').innerText = "Veuillez sélectionner une option.";
      document.getElementById('errorCheckbox').innerText = "Veuillez accepter les conditions d'utilisation.";
      return false; // Empêche la soumission du formulaire
    } else {
      document.getElementById('errorLocation').innerText = ""; // Réinitialise le message d'erreur
    }

    const checkbox1 = document.getElementById("checkbox1");


    // S'il y a des erreurs, lève une exception
    if (errors !== '') {
      throw new Error("Des champs requis ne sont pas remplis correctement.");
    }

    // Affiche un message de succès si tout est valide
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  } catch (error) {
    // En cas d'erreur, affiche un message d'erreur dans la console
    console.error("Une erreur s'est produite lors de la validation du formulaire :", error.message);
    return false;
  }
}

