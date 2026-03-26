// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealItems = document.querySelectorAll(".reveal-item");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("is-visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================
// SMOOTH BUTTON CLICK SCROLL (OPTIONAL)
// ==========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
