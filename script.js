// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.
// quando si carica il dom
document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. cambiami il menu
     ========================================================================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // hambuerger diventa croce
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
  // chiude menu quando clicco
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });

  /* ==========================================================================
     2.cosa succede superati i 100px
     ========================================================================== */
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* ==========================================================================
     3. al toccare inizia un progetto dammi la modale del preventivo
     ========================================================================== */
  const ctaBtn = document.querySelector(".cta-btn");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.querySelector(".modal-close");

  // al click
  ctaBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open");
  }); // chiudi con la x
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
  });

  // chiudi anche toccando fuori
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("open");
    }
  });

  /* tema chiaro scuro */
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark"); // se io clicco il tasto tema dagli css dark e viceversa
    const themeIcon = themeToggle.querySelector("i");
    if (body.classList.contains("dark")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  });
});
