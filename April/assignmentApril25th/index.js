const homeBtn = document.querySelector("#home");
const booksBtn = document.querySelector("#books");
const kindleBtn = document.querySelector("#kindle");

const homePara = document.querySelector("#home-p");
const booksPara = document.querySelector("#books-p");
const kindlePara = document.querySelector("#kindle-p");

homeBtn.addEventListener("click", displayHome);

function displayHome() {
  homeBtn.classList.add("btn-active");
  booksBtn.classList.remove("btn-active");
  kindleBtn.classList.remove("btn-active");

  homePara.classList.remove("inactive");
  kindlePara.classList.add("inactive");
  booksPara.classList.add("inactive");
}

booksBtn.addEventListener("click", displayBooks);

function displayBooks() {
  booksBtn.classList.add("btn-active");
  homeBtn.classList.remove("btn-active");
  kindleBtn.classList.remove("btn-active");

  booksPara.classList.remove("inactive");
  homePara.classList.add("inactive");
  kindlePara.classList.add("inactive");
}

kindleBtn.addEventListener("click", displayKindle);

function displayKindle() {
  kindleBtn.classList.add("btn-active");
  homeBtn.classList.remove("btn-active");
  booksBtn.classList.remove("btn-active");

  booksPara.classList.add("inactive");
  homePara.classList.add("inactive");
  kindlePara.classList.remove("inactive");
}

window.onload = loadAll;

function loadAll() {
  homePara.classList.remove("inactive");
  booksPara.classList.remove("inactive");
  kindlePara.classList.remove("inactive");
}
