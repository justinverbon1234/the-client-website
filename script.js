const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const searchToggle = document.querySelector(".search-toggle");
const nav = document.querySelector(".main-nav");
const searchInput = document.querySelector(".site-search input");
const isDesktop = window.matchMedia("(min-width: 768px)");

const isOpen = (name) => header.classList.contains(name);

function setMenu(open) {
  header.classList.toggle("is-menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

function setSearch(open) {
  header.classList.toggle("is-search-open", open);
  searchToggle.setAttribute("aria-expanded", String(open));

  if (open) searchInput.focus();
}

menuToggle.addEventListener("click", () => {
  const open = !isOpen("is-menu-open");

  setSearch(false);
  setMenu(open);

  if (open) nav.querySelector("a").focus();
});

searchToggle.addEventListener("click", () => {
  const open = !isOpen("is-search-open");

  setMenu(false);
  setSearch(open);
});

nav.addEventListener("click", () => {
  const wasOpen = isOpen("is-menu-open");

  setMenu(false);

  if (wasOpen) menuToggle.focus();
});

document.addEventListener("click", (event) => {
  if (header.contains(event.target)) return;

  setMenu(false);
  setSearch(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (isOpen("is-search-open")) {
    setSearch(false);
    searchToggle.focus();
  } else if (isOpen("is-menu-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

isDesktop.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});