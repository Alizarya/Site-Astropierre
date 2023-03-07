// DÉCLARATION DES CONSTANTES DU DOM AVEC LESQUELLES ON TRAVAILLE
const pageAccueil = document.getElementById("pageAccueil");
const pageQuiSuisJe = document.getElementById("pageQuiSuisJe");
const pageMesPrestations = document.getElementById("pageMesPrestations");
const pageMeContacter = document.getElementById("pageMeContacter");

// DÉCLARATION DES BOUTONS A CLIQUER
const btnHeader = document.getElementById("header");
const btnQuiSuisJe = document.getElementById("btnQuiSuisJe");
const btnMesPrestations = document.getElementById("btnMesPrestations");
const btnMeContacter = document.getElementById("btnMeContacter");

// DÉCLARATION DES FONCTIONS DISPLAY
function afficherPageAccueil() {
  pageAccueil.style.display = "flex";
  pageQuiSuisJe.style.display = "none";
  pageMesPrestations.style.display = "none";
  pageMeContacter.style.display = "none";
}

function afficherPageQuiSuisJe() {
  pageAccueil.style.display = "none";
  pageQuiSuisJe.style.display = "flex";
  pageMesPrestations.style.display = "none";
  pageMeContacter.style.display = "none";
}

function afficherPageMesPrestation() {
  pageAccueil.style.display = "none";
  pageQuiSuisJe.style.display = "none";
  pageMesPrestations.style.display = "flex";
  pageMeContacter.style.display = "none";
}

function afficherPageMeContacter() {
  pageAccueil.style.display = "none";
  pageQuiSuisJe.style.display = "none";
  pageMesPrestations.style.display = "none";
  pageMeContacter.style.display = "flex";
}

// DÉCLARATION DES LISTENERS DES BOUTONS DE NAV
btnHeader.addEventListener("click", afficherPageAccueil);
btnQuiSuisJe.addEventListener("click", afficherPageQuiSuisJe);
btnMesPrestations.addEventListener("click", afficherPageMesPrestation);
btnMeContacter.addEventListener("click", afficherPageMeContacter);
