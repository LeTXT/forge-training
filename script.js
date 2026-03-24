const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".gallery-dot");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

let activeIndex = 0;
let autoPlay = null;

const showSlide = (index) => {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });

  activeIndex = index;
};

const startAutoPlay = () => {
  autoPlay = window.setInterval(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 4500);
};

const resetAutoPlay = () => {
  window.clearInterval(autoPlay);
  startAutoPlay();
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoPlay();
  });
});

if (slides.length > 0) {
  showSlide(0);
  startAutoPlay();
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks?.classList.remove("is-open");
    navToggle?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});
