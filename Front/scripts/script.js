// DÉCLARATION DES CONSTANTES DU DOM AVEC LESQUELLES ON TRAVAILLE
const pageAccueil = document.getElementById("pageAccueil");
const pageQuiSuisJe = document.getElementById("pageQuiSuisJe");
// rajouter les futures constantes ici

// DÉCLARATION DES BOUTONS A CLIQUER
const btnHeader = document.getElementById("header");
const btnQuiSuisJe = document.getElementById("btnQuiSuisJe");

// DÉCLARATION DES FONCTIONS HIDDEN-VISIBLE
function afficherPageAccueil() {
  pageAccueil.style.display = "flex";
  pageQuiSuisJe.style.display = "none";
}

function afficherPageQuiSuisJe() {
  pageAccueil.style.display = "none";
  pageQuiSuisJe.style.display = "flex";
}

// DÉCLARATION DES LISTENERS DES BOUTONS DE NAV
btnHeader.addEventListener("click", afficherPageAccueil);
btnQuiSuisJe.addEventListener("click", afficherPageQuiSuisJe);
