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

// Fonction pour valider le formulaire
function validateForm() {
  var first = document.getElementById('first').value;
  var last = document.getElementById('last').value;
  var email = document.getElementById('email').value;
  var birthdate = document.getElementById('birthdate').value;
  var quantity = document.getElementById('quantity').value;
  var location1 = document.getElementById('location1').checked;
  var location2 = document.getElementById('location2').checked;
  var location3 = document.getElementById('location3').checked;
  var location4 = document.getElementById('location4').checked;
  var location5 = document.getElementById('location5').checked;
  var location6 = document.getElementById('location6').checked;
  var checkbox1 = document.getElementById('checkbox1').checked;

  // Réinitialiser les messages d'erreur précédents
  document.getElementById('errorFirst').innerHTML = '';
  document.getElementById('errorLast').innerHTML = '';
  document.getElementById('errorEmail').innerHTML = '';
  document.getElementById('errorBirthdate').innerHTML = '';
  document.getElementById('errorQuantity').innerHTML = '';
  document.getElementById('errorCheckbox').innerHTML = '';

  // Supprimer les classes d'erreur précédentes
  document.getElementById('first').classList.remove('error-field');
  document.getElementById('last').classList.remove('error-field');
  document.getElementById('email').classList.remove('error-field');
  document.getElementById('birthdate').classList.remove('error-field');
  document.getElementById('quantity').classList.remove('error-field');

  // Variable pour stocker les messages d'erreur
  var errors = '';

  // Validation du prénom
  if (first.length < 2 || first.trim() === "") {
    document.getElementById('errorFirst').innerHTML = "Le prénom doit contenir au moins 2 caractères.";
    errors += "Le prénom doit contenir au moins 2 caractères.\n";
    document.getElementById('first').classList.add('error-field'); // Ajoute la classe pour le champ du prénom
  }

  // Validation du nom
  if (last.length < 2 || last.trim() === "") {
    document.getElementById('errorLast').innerHTML = "Le nom doit contenir au moins 2 caractères.";
    errors += "Le nom doit contenir au moins 2 caractères.\n";
    document.getElementById('last').classList.add('error-field'); // Ajoute la classe pour le champ du nom
  }

  // Validation de l'email
  var re = /\S+@\S+\.\S+/; // Expression régulière pour valider l'email

  if (email.trim() === "") {
    document.getElementById('errorEmail').innerHTML = "Veuillez saisir votre adresse email.";
    errors += "Veuillez saisir votre adresse email.\n";
    document.getElementById('email').classList.add('error-field'); // Ajoute la classe pour le champ de l'email
  } else if (!re.test(email)) {
    document.getElementById('errorEmail').innerHTML = "Veuillez saisir une adresse email valide.";
    errors += "Veuillez saisir une adresse email valide.\n";
    document.getElementById('email').classList.add('error-field'); // Ajoute la classe pour le champ de l'email
  }

  // Validation de la date de naissance
  if (birthdate.trim() === "") {
    document.getElementById('errorBirthdate').innerHTML = "Veuillez saisir votre date de naissance.";
    errors += "Veuillez saisir votre date de naissance.\n";
    document.getElementById('birthdate').classList.add('error-field'); // Ajoute la classe pour le champ de la date de naissance
  }

  // Validation du nombre de tournois
  if (isNaN(quantity) || quantity.trim() === "") {
    document.getElementById('errorQuantity').innerHTML = "Veuillez saisir un nombre pour le nombre de concours.";
    errors += "Veuillez saisir un nombre pour le nombre de concours.\n";
    document.getElementById('quantity').classList.add('error-field'); // Ajoute la classe pour le champ du nombre de concours
  }

  // Validation de la sélection de l'emplacement
  

  // Validation de l'acceptation des conditions générales
 

  // Afficher tous les messages d'erreur ensemble
  if (errors !== '') {
    return false;
  }

  // Affichage du message de confirmation
  alert("Merci ! Votre réservation a été reçue.");
  return true; // Le formulaire est valide, renvoie true seulement si toutes les validations sont réussies
}
