const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuToggle?.addEventListener("click", () => {
  setMenu(!body.classList.contains("menu-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("menu-open")) return;
  if (navPanel?.contains(event.target) || menuToggle?.contains(event.target)) return;
  setMenu(false);
});

document.querySelectorAll("img").forEach((image) => {
  if (image.complete && image.naturalWidth === 0) {
    image.hidden = true;
  }

  image.addEventListener("error", () => {
    image.hidden = true;
  });
});
