// Menu mobile
const bouton = document.querySelector(".nav-bouton");
const nav = document.querySelector(".nav");
if (bouton && nav) {
  bouton.addEventListener("click", () => {
    const ouvert = nav.classList.toggle("ouvert");
    bouton.setAttribute("aria-expanded", String(ouvert));
    bouton.textContent = ouvert ? "Fermer" : "Menu";
  });
}

// Formulaire de devis (site de démonstration : rien n'est envoyé)
const formulaire = document.querySelector("#form-devis");
if (formulaire) {
  formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formulaire.reportValidity()) return;
    const prenom = formulaire.querySelector("#nom").value.trim().split(" ")[0];
    const message = document.querySelector("#confirmation");
    message.querySelector("[data-prenom]").textContent = prenom ? `Merci ${prenom}.` : "Merci.";
    message.classList.add("visible");
    formulaire.querySelector("button[type=submit]").disabled = true;
    message.focus();
  });
}
