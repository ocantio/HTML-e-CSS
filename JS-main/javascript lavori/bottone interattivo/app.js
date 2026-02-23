const addMovieButton = document.querySelector("header button");
const addModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelButton = addModal.querySelector(".btn--passive");

// FUNZIONE PER APRIRE LA MODAL
function openModal() {
  addModal.style.display = "block";
  backdrop.style.display = "block";
}

// FUNZIONE PER CHIUDERE LA MODAL
function closeModal() {
  addModal.style.display = "none";
  backdrop.style.display = "none";
}

// EVENTI
addMovieButton.addEventListener("click", openModal);
cancelButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
